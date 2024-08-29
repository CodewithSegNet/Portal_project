#!/usr/bin/env python3
from flask import (
    current_app,
    Blueprint,
    render_template
)
import logging
import os
from dotenv import load_dotenv
from app import cache
from flask_restx import Namespace, Resource



# Set up logging
logging.basicConfig(level=logging.DEBUG)


# /****************************************** GLOBAL ROUTES ************************************************/


pages_bp = Blueprint("pages", __name__, template_folder="templates")




# Load environment variables from the .env file
load_dotenv()


@pages_bp.route("/")
@cache.cached(timeout=500)
def home():
    """
    A route that handles the app homepage
    """

    image1 = os.path.join(current_app.config["UPLOAD_FOLDER"], "section-img.png")
    image2 = os.path.join(current_app.config["UPLOAD_FOLDER"], "slider.jpg")
    image3 = os.path.join(current_app.config["UPLOAD_FOLDER"], "student.webp")
    image4 = os.path.join(current_app.config["UPLOAD_FOLDER"], "logo_2.webp")
    image5 = os.path.join(current_app.config["UPLOAD_FOLDER"], "sunPics1.webp")
    image6 = os.path.join(current_app.config["UPLOAD_FOLDER"], "sunPics2.webp")
    # image7 = os.path.join(app.config['UPLOAD_FOLDER'], 'icon-close.svg')
    return render_template(
        "homepage.html",
        user_image=image1,
        user_image2=image2,
        user_image3=image3,
        user_image4=image4,
        user_image5=image5,
        user_image6=image6,
    )