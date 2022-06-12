from flask import Flask
from flask_migrate import Migrate
from flask_cors import CORS
from flask_login import LoginManager

from .models import db, User
from .api.user_routes import user_routes
from .api.item_routes import item_routes
from .api.post_routes import post_routes
from .api.auth_routes import auth_routes

from .config import Config
from .seeds import seed_commands

app = Flask(__name__)

login = LoginManager(app)
login.login_view = 'auth.unauthorized'

@login.user_loader
def load_user(id):
    return User.query.get(int(id))

app.cli.add_command(seed_commands)
app.config.from_object(Config)
app.register_blueprint(auth_routes, url_prefix='/api/auth')
app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(item_routes, url_prefix='/api/items')
app.register_blueprint(post_routes, url_prefix='/api/posts')

db.init_app(app)
Migrate(app, db)

CORS(app)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    if path == 'favicon.ico':
        return app.send_static_file('favicon.ico')
    return app.send_static_file('index.html')
