from logging import exception

from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_marshmallow import Marshmallow
from flask_bcrypt import Bcrypt
from flask import abort
import jwt
import datetime

#from .db_config import DB_CONFIG



app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:Wearecool12345@172.20.10.2:3306/howtoaub'
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
    if (user_email == " " or password == " "):
        abort(400)
    else:
        user = User.query.filter_by(user_email=user_email).first()
        if (user is None):
            abort(403)
        else:

            if (bcrypt.check_password_hash(user.hashed_password, password)):
                token = create_token(user.id)
                return jsonify({'token': token})
            else:
                abort(403)

    db.session.add(u)
    db.session.commit()
    return jsonify(user_schema.dump(u))



