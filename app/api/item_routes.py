from flask import Blueprint
from app.models import db, Item

item_routes = Blueprint('items', __name__)

@item_routes.route('/')
def items():
    items = Item.query.all()
    return {'items': [item.to_dict() for item in items]}
