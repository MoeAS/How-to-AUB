from ftplib import all_errors
from logging import exception

from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_marshmallow import Marshmallow
from flask_bcrypt import Bcrypt
from flask import abort
import jwt
import datetime
from sqlalchemy import desc
from flask import Flask, render_template, request, redirect, url_for
from flask_mysqldb import MySQL
from flask_admin import Admin, expose, AdminIndexView
from flask_admin.contrib.sqla import ModelView
from flask_login import UserMixin, LoginManager, current_user, login_user, logout_user
from flask_admin.menu import MenuLink
from sqlalchemy import Boolean
from sqlalchemy import create_engine
from sqlalchemy_utils import database_exists, create_database
from getpass import getpass

#from .db_config import DB_CONFIG

ip_of_db = "127.0.0.1"
username = "root"
password = "7aMoudi72571"
db_name = "howtoaub"

url = f'mysql+pymysql://{username}:{password}@{ip_of_db}:3306/{db_name}'

app = Flask(__name__)
app = Flask(__name__)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '7aMoudi72571'
app.config['MYSQL_DB'] = 'howtoaub'
mysql = MySQL(app)
app.config['SQLALCHEMY_DATABASE_URI'] = url
app.config['SECRET_KEY'] = 'mysecret'
db = SQLAlchemy(app)

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'
CORS(app)
ma = Marshmallow(app)
bcrypt = Bcrypt(app)


engine = create_engine(url, echo=True)

# Create database if it does not exist.
if not database_exists(engine.url):
    create_database(engine.url)
else:
    # Connect the database if exists.
    engine.connect()

#from model.user import User, user_schema

class HomeView(AdminIndexView):

    def is_visible(self):
        # This view won't appear in the menu structure
        return False

    @expose("/")
    def index(self):
        return redirect(url_for('admin_authentication'))

admin = Admin(app, index_view=HomeView(name='Home'))

class MyModelView(ModelView):
    column_display_pk = True

    def is_accessible(self):
        return current_user.is_authenticated

class LoginMenuLink(MenuLink):

    def is_accessible(self):
        return not current_user.is_authenticated


class LogoutMenuLink(MenuLink):

    def is_accessible(self):
        return current_user.is_authenticated

admin.add_link(LogoutMenuLink(name='Logout', category='', url="/admin/logout"))
admin.add_link(LoginMenuLink(name='Login', category='', url="/admin/login"))

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(user_id)

@login_manager.user_loader
class User(db.Model, UserMixin):

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_email = db.Column(db.String(30), unique=True)
    user_name = db.Column(db.String(30), unique=True)
    hashed_password = db.Column(db.String(128))
    done_survey = db.Column(db.Boolean)

    def __init__(self, user_email = "", user_name = "", password = "0", done_survey=0):
        #super(User, self).__init__(id=id)
        super(User, self).__init__(user_email=user_email)
        super(User, self).__init__(user_name=user_name)
        self.hashed_password = bcrypt.generate_password_hash(password)
        super(User, self).__init__(done_survey=done_survey)

class UserSchema(ma.Schema):
    class Meta:
        fields = ("id", "user-email", "user_name", "hashed_password", "done_survey")
        model = User


user_schema = UserSchema()
admin.add_view(MyModelView(User, db.session))

class Club(db.Model):

    club_crn = db.Column(db.String(30), primary_key=True)
    club_name = db.Column(db.String(70))
    club_description = db.Column(db.Text())
    club_area = db.Column(db.String(70))

    def __init__(self, club_crn, club_name, club_description, club_area):
        super(Club, self).__init__(club_crn=club_crn)
        super(Club, self).__init__(club_name=club_name)
        super(Club, self).__init__(club_description=club_description)
        super(Club, self).__init__(club_area= club_area)


class ClubSchema(ma.Schema):
    class Meta:
        fields = ("club_crn", "club_name", "club_description", "club_area")
        model = Club


club_schema = ClubSchema()
clubs_schema = ClubSchema(many=True)
admin.add_view(MyModelView(Club, db.session))

class Course(db.Model):
    course_id = db.Column(db.String(70), unique=True)
    course_crn = db.Column(db.String(30), primary_key=True)
    course_name = db.Column(db.String(70))
    course_description = db.Column(db.Text())
    course_dept = db.Column(db.String(70))

    def __init__(self, course_crn, course_name, course_description):
        super(Course, self).__init__(course_id=course_id)
        super(Course, self).__init__(course_crn=course_crn)
        super(Course, self).__init__(course_name=course_name)
        super(Course, self).__init__(course_description=course_description)
        super(Course, self).__init__(course_dept=course_dept)

class CourseSchema(ma.Schema):
    class Meta:
        fields = ("course_id", "course_crn", "course_name", "course_description", "course_dept")
        model = Course


course_schema = CourseSchema()
courses_schema = CourseSchema(many=True)
admin.add_view(MyModelView(Course, db.session))

class Prerequisite(db.Model):

    course_crn = db.Column(db.String(30), primary_key=True)
    course_prereq = db.Column(db.String(30), primary_key=True)
    course_pre_name = db.Column(db.String(30), unique=True)

    def __init__(self, course_crn, course_prereq, course_pre_name):
        super(Prerequisite, self).__init__(course_crn=course_crn)
        super(Prerequisite, self).__init__(course_prereq=course_prereq)
        super(Prerequisite, self).__init__(course_pre_name=course_pre_name)

class PrerequisiteSchema(ma.Schema):
    class Meta:
        fields = ("course_crn", "course_prereq", "course_pre_name")
        model = Prerequisite


prerequisite_schema = PrerequisiteSchema()
prerequisites_schema = PrerequisiteSchema(many=True)
admin.add_view(MyModelView(Prerequisite, db.session))


class Forum(db.Model):

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_email = db.Column(db.String(30))
    title = db.Column(db.String(100))
    description = db.Column(db.Text())
    rating = db.Column(db.Integer)
    date = db.Column(db.DateTime, default = datetime.datetime.now)

    def __init__(self, user_email, title, description, rating):
        #super(Forum, self).__init__(id=id)
        super(Forum, self).__init__(user_email=user_email)
        super(Forum, self).__init__(title=title)
        super(Forum, self).__init__(description=description)
        super(Forum, self).__init__(rating=rating)
        #super(Forum, self).__init__(date=date)


class ForumSchema(ma.Schema):
    class Meta:
        fields = ("id", "user_email", "title", "description", "rating", "date")
        model = Forum


forum_schema = ForumSchema()
forums_schema = ForumSchema(many=True)
admin.add_view(MyModelView(Forum, db.session))


class Reminder(db.Model):

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_email = db.Column(db.String(30))
    title = db.Column(db.String(100))
    description = db.Column(db.Text())

    date = db.Column(db.Date)

    def __init__(self, user_email, title, description, date):
        #super(Forum, self).__init__(id=id)
        super(Reminder, self).__init__(user_email=user_email)
        super(Reminder, self).__init__(title=title)
        super(Reminder, self).__init__(description=description)
        super(Reminder, self).__init__(date=date)
        #super(Forum, self).__init__(date=date)


class ReminderSchema(ma.Schema):
    class Meta:
        fields = ("id", "user_email", "title", "description", "date")
        model = Reminder


reminder_schema = ReminderSchema()
reminders_schema = ReminderSchema(many=True)
admin.add_view(MyModelView(Reminder, db.session))


class ForumReply(db.Model):

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_email = db.Column(db.String(30))
    forum_id = db.Column(db.Integer)
    description = db.Column(db.Text())
    date = db.Column(db.DateTime, default = datetime.datetime.now)

    def __init__(self, user_email, forum_id, description):
        #super(Forum, self).__init__(id=id)
        super(ForumReply, self).__init__(user_email=user_email)
        super(ForumReply, self).__init__(forum_id=forum_id)
        super(ForumReply, self).__init__(description=description)
        #super(Forum, self).__init__(date=date)


class ForumReplySchema(ma.Schema):
    class Meta:
        fields = ("id", "user_email", "forum_id", "description", "date")
        model = ForumReply


forumreply_schema = ForumReplySchema()
forumreplies_schema = ForumReplySchema(many=True)
admin.add_view(MyModelView(ForumReply, db.session))


class Study(db.Model):
    place_id = db.Column(db.Integer, primary_key=True, autoincrement= True)
    place_name = db.Column(db.String(30))
    place_description = db.Column(db.Text())
    place_image = db.Column(db.String(70))

    def __init__(self, place_id, place_name, place_description, place_image):
        super(Study, self).__init__(place_id = place_id)
        super(Study, self).__init__(place_name=place_name)
        super(Study, self).__init__(place_description=place_description)
        super(Study, self).__init__(place_image=place_image)

class StudySchema(ma.Schema):
    class Meta:
        fields = ("place_id",  "place_name", "place_description", "place_image")
        model = Study




study_schema = StudySchema()
studys_schema = StudySchema(many=True)
admin.add_view(MyModelView(Study, db.session))





@app.route('/hello', methods=['GET'])
def hello():
    return jsonify({"Hello":"World"})

################################## USER SIGNIN/SIGNUP PAGES ####################

@app.route('/signup', methods=['POST'])
def signup():
    print(request)
    user_email = request.json['user_email']
    user_name = request.json['user_name']
    hashed_password = request.json['password']

    if (user_email == "" or hashed_password == ""):
        return jsonify({"msg": "Enter email or password"}), 401

    if (user_name == ""):
        return jsonify({"msg": "Enter username" }), 403

    if user_name.startswith("admin"):
        return jsonify({"msg": "Invalid username"}), 402

    u = User(user_email, user_name, hashed_password)
    db.session.add(u)
    db.session.commit()
    return jsonify(user_schema.dump(u))

@app.route('/signin', methods=['POST', 'GET'])
def signin():
    print(request)
    user_email= request.json['user_email']
    password = request.json['password']
    if (user_email == "" or password == ""):
        return jsonify({"msg": "Enter email or password"}), 401
    else:
        user = User.query.filter_by(user_email=user_email).first()
        if (user is None):
            return jsonify({"msg": "Wrong Email"}), 402
        else:

            if (bcrypt.check_password_hash(user.hashed_password, password)):
                #token = create_token(user.id)
                #return jsonify({'token': token})
                return jsonify({'msg':"Successful"}), 200
            else:
                return jsonify({"msg": "Wrong Password"}), 403

    db.session.add(user)
    db.session.commit()
    return jsonify(user_schema.dump(user))

@app.route('/getsurvey/<user_email>', methods=['GET'])
def getsurvey(user_email):
    print(request)
    user = User.query.filter_by(user_email=user_email).first()
    return jsonify(user_schema.dump(user))

@app.route('/setsurvey/<user_email>', methods=['GET'])
def setsurvey(user_email):
    print(request)
    user = User.query.filter_by(user_email=user_email).first()
    user.done_survey = 1
    db.session.commit()
    return jsonify(user_schema.dump(user))

################################## FORUMS PAGE #################################

@app.route('/getforum', methods=['GET'])
def getforum():
    print(request)
    session = db.session()
    all_forums = session.query(Forum).order_by(Forum.date.desc()).all()
    return jsonify(forums_schema.dump(all_forums))

@app.route('/getforum/<id>/', methods=['GET'])
def getforums(id):
    print(request)
    forums = Forum.query.get(id)
    return jsonify(forum_schema.dump(forums))

@app.route('/addforum', methods=['POST'])
def addforum():
    print(request)

    user_email = request.json['user_email']
    title = request.json['title']
    description = request.json['description']
    rating = request.json['rating']

    forums = Forum(user_email, title, description, rating)

    db.session.add(forums)
    db.session.commit()

    return jsonify(forum_schema.dump(forums))

@app.route('/updateforum/<id>/', methods=['PUT'])
def updateforum(id):
    print(request)
    forums = Forum.query.get(id)

    title = request.json['title']
    description = request.json['description']
    #rating = request.json['rating']
    #user_email = request.json['user_email']

    forums.title = title
    forums.description = description
    #forums.rating = rating
    #forums.user_email = user_email

    db.session.commit()

    return jsonify(forum_schema.dump(forums))

@app.route('/deleteforum/<id>/', methods=['DELETE'])
def deleteforum(id):
    print(request)
    forum = Forum.query.get(id)
    db.session.delete(forum)
    db.session.commit()

    return jsonify(forum_schema.dump(forum))


@app.route('/rateforum/<id>/', methods=['PUT'])
def rateforum(id):
    print(request)
    forums = Forum.query.get(id)

    rating = request.json['rating']
    #user_email = request.json['user_email']

    forums.rating = rating
    #forums.user_email = user_email

    db.session.commit()

    return jsonify(forum_schema.dump(forums))

@app.route('/getforumreply/<id>/', methods=['GET'])
def getforumreply(id):
    print(request)
    forum_id = id
    forum_reply = ForumReply.query.filter_by(forum_id=id).all()
    return jsonify(forumreplies_schema.dump(forum_reply))

@app.route('/forumreply/<id>/', methods=['POST'])
def forumreply(id):
    print(request)

    forum_id = id
    description = request.json['description']
    user_email = request.json['user_email']

    forum_reply = ForumReply(user_email, forum_id, description)

    db.session.add(forum_reply)
    db.session.commit()

    return jsonify(forumreply_schema.dump(forum_reply))

################################## CLUBS PAGE ##################################

@app.route('/clubs', methods=['GET'])
def clubs():
    print(request)
    all_clubs = Club.query.all()
    return jsonify(clubs_schema.dump(all_clubs))

@app.route('/interest', methods=['GET'])
def interest():
    print(request)
    all_interests = Club.query.with_entities(Club.club_area).distinct()
    print(all_interests)
    return jsonify(clubs_schema.dump(all_interests))

################################## COURSES PAGE ################################

@app.route('/study', methods=['GET'])
def study():
    print(request)
    all_areas = Study.query.all()
    return jsonify(studys_schema.dump(all_areas))

@app.route('/courses', methods=['GET'])
def courses():
    print(request)
    all_courses = Course.query.all()
    return jsonify(courses_schema.dump(all_courses))

@app.route('/details', methods=['GET', 'POST'])
def details():
    print(request)
    course_crn = request.json['course_crn']
    courses_details = Course.query.filter_by(course_crn = course_crn).all()
    return jsonify(course_schema.dump(courses_details))

@app.route('/prerequisite', methods=[ 'GET'])
def prerequisite():
    print(request)
    courses_prerequisite = Prerequisite.query.all()
    return jsonify(prerequisites_schema.dump(courses_prerequisite))

@app.route('/depts', methods=['GET'])
def depts():
    print(request)
    all_depts = Course.query.with_entities(Course.course_dept).distinct()
    return jsonify(courses_schema.dump(all_depts))

################################## REMINDERS/CALENDARS PAGE ####################

@app.route('/reminders', methods=['GET'])
def reminders():
    print(request)
    all_reminders = Reminder.query.all()
    return jsonify(reminders_schema.dump(all_reminders))

@app.route('/addreminder', methods=['POST'])
def addreminder():
    print(request)

    user_email = request.json['user_email']
    title = request.json['title']
    description = request.json['description']
    date = request.json['date']
    temp = date.split('T')
    date = temp[0]
    reminders = Reminder(user_email, title, description, date)

    db.session.add(reminders)
    db.session.commit()

    all_reminders = Reminder.query.all()
    return jsonify(reminders_schema.dump(all_reminders))

@app.route('/alerts', methods=['GET'])
def alerts():
    START_DATE = datetime.datetime.now()
    END_DATE = datetime.datetime.now() + datetime.timedelta(days=3)
    print(request)
    all_reminders = Reminder.query.filter(Reminder.date.between(START_DATE, END_DATE)).all()
    return jsonify(reminders_schema.dump(all_reminders))


############################ ADMIN PAGE ########################################

@app.route('/admin/login', methods=['GET', 'POST'])
def admin_authentication():
    cc = "Admin Page"
    cursor = mysql.connection.cursor()

    if request.method == "POST":

        email_input = request.form['email']
        password_input = request.form['password']

        try:
            cursor.execute(f"SELECT user_email from user where user_email = '{email_input}' AND user_name like 'admin%'")
            email = cursor.fetchall()

            if (email_input == "" or password_input == ""):
                error = "Enter email or password"
                #return render_template('admin_login.html', **locals())

            elif (len(email) == 0):
                error = "Enter a valid email"
                #return render_template('admin_login.html', **locals())

            elif (email[0][0] == email_input):
                cursor.execute(f"SELECT hashed_password from user where user_email = '{email_input}' AND user_name like 'admin%'")
                password = cursor.fetchall()

                if (bcrypt.check_password_hash(password[0][0], password_input)):
                    #token = create_token(user.id)
                    #return jsonify({'token': token})
                    cursor.execute(f"SELECT * from user where user_email = '{email_input}' AND user_name like 'admin%'")
                    id = cursor.fetchall()
                    user = User.query.get(id[0][0])
                    print(user)
                    login_user(user)
                    return redirect(url_for('admin.index')+"/user/")
                    #return render_template('admin_login.html', **locals())
                else:
                    error = "Wrong password, please try again"
                    #return render_template('admin_login.html', **locals())

        except Exception as e:
            print("Error: " + str(e))
            cursor = mysql.connection.cursor()
            error = e
            return render_template('admin_login.html', **locals())
        #mysql.connection.commit()

        #cursor.close()

    return render_template('admin_login.html', **locals())

@app.route('/admin/logout', methods=['GET', 'POST'])
def admin_authentication_logout():
    logout_user()
    return redirect(url_for('admin_authentication'))
