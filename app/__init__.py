import os
from flask import Flask
from flask_migrate import Migrate
from flask_cors import CORS
from flask_login import LoginManager

from .models import db, User
from .config import Config

app = Flask(__name__)

login = LoginManager(app)
login.login_view = 'auth.unauthorized'

@login.user_loader
def load_user(id):
    return User.query.get(int(id))

app.config.from_object(Config)


db.init_app(app)
Migrate(app, db)

CORS(app)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    if path == 'favicon.ico':
        return app.send_static_file('favicon.ico')
    return app.send_static_file('index.html')
