from ..app import db, ma, bcrypt


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