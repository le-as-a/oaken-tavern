import os
from flask import Flask
from flask_migrate import Migrate

from .models import db
from .config import Config

app = Flask(__name__)
app.config.from_object(Config)
db.init_app(app)
Migrate(app, db)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    if path == 'favicon.ico':
        return app.send_static_file('favicon.ico')
    return app.send_static_file('index.html')
