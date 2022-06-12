from .db import db

class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    user = db.Column(db.String(40), nullable=False)
    url = db.Column(db.String(255), nullable=False)
    desc = db.Column(db.Text, nullable=True)

    def to_dict(self):
        return {
            'id': self.id,
            'user': self.user,
            'url': self.url,
            'desc': self.desc
        }
