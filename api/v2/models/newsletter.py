#!/usr/bin/python3


# Import
from app import db
from datetime import datetime
import re
import uuid



class Newsletter(db.Model):
    __tablename__ = "newsletters"
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid7()), nullable=False)
    email = db.Column(db.String(100), nullable=False)

    # A validation check for email format using python library 'validate_email'
    def validate_email(self, email):
        """
        define a re expression for a simple email format check
        """
        email_pattern = r"^[\w\.-]+@[\w\.-]+\.\w+$"
        if not re.match(email_pattern, email):
            raise ValueError("Invalid email format")
