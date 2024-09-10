#!/usr/bin/env python3

# imports
from flask import Flask
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_caching import Cache
from decouple import config
from flask_cors import CORS
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from flask_compress import Compress
from static.flasgger_static.extensions import api, init_app, swagger_blueprint
import os

 # Initialize other extensions
db = SQLAlchemy()
cache = Cache()
compress = Compress()

def create_app():
    # create an instance of the flask app
    app = Flask(__name__)
    
    # Load configuration from Config class
    app.config.from_object(Config)


    # Initialize JWT Manager
    jwt = JWTManager(app)
    
    # Initialize Flask-caching
    cache.init_app(app)
    
    # Register the blueprint without removing /swagger.json
    app.register_blueprint(swagger_blueprint, url_prefix='/docs')

    # Initialize the database with the app
    db.init_app(app)
        
    # Enable compression
    compress.init_app(app)
    
    # Initialize Flask-Migrate
    migrate = Migrate(app, db)
    
         
    # secret key from the .env file using python-decouple
    secret_key = config("SECRET_KEY")
    PAYSTACK_SECRET_KEY = os.getenv("PAYSTACK_SECRET_KEY")

    # set key for app
    app.secret_key = secret_key

    # Access the app's configuration through the 'app' instance
    app.config["UPLOAD_FOLDER"] = os.path.join("static", "img")

    
    # Import and add Namespaces to the API
    from api.v2.controllers.student_controller import student_ns
    api.add_namespace(student_ns, path='/api/v2/students')
    
    from api.v2.controllers.admin_controller import admin_ns
    api.add_namespace(admin_ns, path='/api/v2/admins')
    
    from api.v2.controllers.notification_controller import notification_ns
    api.add_namespace(notification_ns, path='/api/v2/notifications')
    
    
    from api.v2.controllers import register_blueprints
    register_blueprints(app)

    # create the datebase tables
    with app.app_context():
        db.create_all()


    # Configure CORS to allow requests from any origin
    CORS(app, supports_credentials=True)
    
    init_app(app)
    
    # Return the Flask app instance
    return app


if __name__ == "__main__":
    """
    Create the Flask app by calling the create_app() function
    """
    app = create_app()

    # Start the Flask app in debug mode
    app.run(debug=True)
