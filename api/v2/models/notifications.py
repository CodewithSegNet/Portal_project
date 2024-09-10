#!/usr/bin/python3


# Import
from app import db
from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects.postgresql import UUID
import uuid


# Association tables for many-to-many relationships
notification_semester = db.Table('notification_semester',
    db.Column('notification_id', db.String(36), db.ForeignKey('notifications.id'), primary_key=True),
    db.Column('semester_id', db.String(36), db.ForeignKey('semesters.id'), primary_key=True)
)

notification_department = db.Table('notification_department',
    db.Column('notification_id', db.String(36), db.ForeignKey('notifications.id'), primary_key=True),
    db.Column('department_id', db.String(36), db.ForeignKey('departments.id'), primary_key=True)
)

student_notification = db.Table('student_notification',
    db.Column('student_id', db.String(50), db.ForeignKey('students.admission_number'), primary_key=True),
    db.Column('notification_id', db.String(36), db.ForeignKey('notifications.id'), primary_key=True)
)

class Notification(db.Model):
    __tablename__ = "notifications"
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()), nullable=False)
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
    students = db.relationship('Student', secondary=student_notification)


    def mark_as_read(self):
        self.is_read = True
        db.session.commit()

    def __repr__(self):
        return f'<Notification id={self.id} name={self.name} subject={self.subject}>'