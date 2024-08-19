#!/usr/bin/env python3

# Import
from app import db
import uuid



class PaymentStatus(db.Model):
    __tablename__ = "payments"
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid7()), nullable=False)
    is_paid = db.Column(db.Boolean, default=False)
    email = db.Column(db.String(255), db.ForeignKey('applicants.email'), nullable=False)


    def __repr__(self):
        return f"<PaymentStatus(email='{self.email}', is_paid={self.is_paid})>"
