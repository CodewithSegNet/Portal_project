#!/usr/bin/python3


# Import
from app import db
from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
import uuid



# Association tables
notification_semester = db.Table('notification_semester',
    db.Column('notification_id', db.String(36), db.ForeignKey('notifications.id'), primary_key=True),
    db.Column('semester_id', db.String(36), db.ForeignKey('semesters.id'), primary_key=True)
)

notification_department = db.Table('notification_department',
    db.Column('notification_id', db.String(36), db.ForeignKey('notifications.id'), primary_key=True),
    db.Column('department_id', db.String(36), db.ForeignKey('departments.id'), primary_key=True)
)

class Notification(db.Model):
    __tablename__ = "notifications"
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid7()), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    subject = db.Column(db.String(100), nullable=False)
    message = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    updated_at = db.Column(
        db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow, nullable=False
    )
    is_read = db.Column(db.Boolean, default=False, nullable=False)

    # Many-to-many relationships
    semesters = db.relationship('Semester', secondary=notification_semester, backref='notifications')
    departments = db.relationship('Department', secondary=notification_department, backref='notifications')

    def mark_as_read(self):
        self.is_read = True