from ..app import db, ma, bcrypt


class Reminder(db.Model):

    user_email = db.Column(db.String(30), primary_key=True)
    reminder_name = db.Column(db.String(128))
    reminder_desc = db.Column(db.String(128))
    reminder_date = db.Column(db.datetime)

    def __init__(self, user_email, user_name, password):
        super(User, self).__init__(user_email=user_email)
        super(User, self).__init__(reminder_name=reminder_name)
        super(User, self).__init__(reminder_desc=reminder_desc)
        super(User, self).__init__(reminder_date=reminder_date)


class ReminderSchema(ma.Schema):
    class Meta:
        fields = ("user_email", "reminder_name", "reminder_desc", "reminder_date")
        model = Reminder


reminder_schema = ReminderSchema(many = True)