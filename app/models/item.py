from .db import db

class Item(db.Model):
    __tablename__ = 'items'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False)
    desc = db.Column(db.Text, nullable=True)
    price = db.Column(db.Integer, nullable=False)
    img_url = db.Column(db.String, nullable=True)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'desc': self.desc,
            'price': self.price,
            'img_url': self.img_url
        }
