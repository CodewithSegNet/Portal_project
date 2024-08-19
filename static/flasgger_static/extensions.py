# extensions.py
from flask_restx import Api
from flask_sqlalchemy import SQLAlchemy
from flask_caching import Cache
from flask import Blueprint, render_template, current_app

# Initialize the Api object
api = Api(
    version='2.0',
    title='Sunnah College API',
    description='A School Portal API',
)

# Initialize other extensions
db = SQLAlchemy()
cache = Cache()


# Create a Blueprint for the custom Swagger UI
swagger_blueprint = Blueprint('swagger', __name__, template_folder='templates')

@swagger_blueprint.route('/swagger-ui')
def swagger_ui():
    return render_template('swagger.html')

def init_app(app):
    api.init_app(app)
    app.register_blueprint(swagger_blueprint, url_prefix='/docs')