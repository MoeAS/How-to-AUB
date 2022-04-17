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

#from .db_config import DB_CONFIG



app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:7aMoudi72571@127.0.0.1:3306/howtoaub'
db = SQLAlchemy(app)

CORS(app)
ma = Marshmallow(app)
bcrypt = Bcrypt(app)

#from model.user import User, user_schema

class User(db.Model):

    user_email = db.Column(db.String(30), primary_key=True)
    user_name = db.Column(db.String(30), unique=True)
    hashed_password = db.Column(db.String(128))

    def __init__(self, user_email, user_name, password):
        super(User, self).__init__(user_email=user_email)
        super(User, self).__init__(user_name=user_name)
        self.hashed_password = bcrypt.generate_password_hash(password)


class UserSchema(ma.Schema):
    class Meta:
        fields = ("user-email", "user_name", "hashed_password")
        model = User


user_schema = UserSchema()

class Club(db.Model):

    club_crn = db.Column(db.String(30), primary_key=True)
    club_name = db.Column(db.String(70))
    club_description = db.Column(db.Text())

    def __init__(self, club_crn, club_name, club_description):
        super(Club, self).__init__(club_crn=club_crn)
        super(Club, self).__init__(club_name=club_name)
        super(Club, self).__init__(club_description=club_description)


class ClubSchema(ma.Schema):
    class Meta:
        fields = ("club_crn", "club_name", "club_description")
        model = Club


club_schema = ClubSchema()
clubs_schema = ClubSchema(many=True)

class Course(db.Model):

    course_crn = db.Column(db.String(30), primary_key=True)
    course_name = db.Column(db.String(70))
    course_description = db.Column(db.Text())

    def __init__(self, course_crn, course_name, course_description):
        super(Course, self).__init__(course_crn=course_crn)
        super(Course, self).__init__(course_name=course_name)
        super(Course, self).__init__(course_description=course_description)


class CourseSchema(ma.Schema):
    class Meta:
        fields = ("course_crn", "course_name", "course_description")
        model = Course


course_schema = CourseSchema()
courses_schema = CourseSchema(many=True)

class Prerequisite(db.Model):

    course_crn = db.Column(db.String(30), primary_key=True)
    course_prereq = db.Column(db.String(30), primary_key=True)

    def __init__(self, course_crn, course_prereq):
        super(Prerequisite, self).__init__(course_crn=course_crn)
        super(Prerequisite, self).__init__(course_prereq=course_prereq)


class PrerequisiteSchema(ma.Schema):
    class Meta:
        fields = ("course_crn", "course_prereq")
        model = Prerequisite


prerequisite_schema = PrerequisiteSchema()
prerequisites_schema = PrerequisiteSchema(many=True)


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

@app.route('/hello', methods=['GET'])
def hello():
    return jsonify({"Hello":"World"})

@app.route('/signup', methods=['POST'])
def signup():
    print(request)
    user_email = request.json['user_email']
    user_name = request.json['user_name']
    hashed_password = request.json['password']

    u = User(user_email, user_name, hashed_password)
    db.session.add(u)
    db.session.commit()
    return jsonify(user_schema.dump(u))

@app.route('/signin', methods=['POST'])
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
    rating = request.json['rating']
    #user_email = request.json['user_email']

    forums.title = title
    forums.description = description
    forums.rating = rating
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


@app.route('/clubs', methods=['GET'])
def clubs():
    print(request)
    all_clubs = Club.query.all()
    return jsonify(clubs_schema.dump(all_clubs))

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

@app.route('/prerequisite', methods=['GET', 'POST'])
def prerequisite():
    print(request)
    course_crn = request.json['course_crn']
    courses_prerequisite = Prerequisite.query.filter_by(course_crn = course_crn).all()
    return jsonify(prerequisites_schema.dump(courses_prerequisite))
