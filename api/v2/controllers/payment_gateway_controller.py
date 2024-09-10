#!/usr/bin/env python3
from flask import (
    current_app,
    jsonify,
    request,
    url_for,
    session,
    redirect,
)
from functools import wraps
import requests
import logging
import os
from api.v2.models import (
    PaymentStatus
)
from app import db
from api.v2.controllers.homepage_controller import pages_bp






@pages_bp.route("/payment-callback", methods=["GET"])
def payment_callback():
    reference = request.args.get("reference")
    logging.debug("Reference: %s", reference)

    if not reference:
        logging.error("No reference provided")
        return "No reference provided", 400

    # Verify User payment
    try:
        response = requests.get(
            f"https://api.paystack.co/transaction/verify/{reference}",
            headers={"Authorization": f"Bearer {os.getenv('PAYSTACK_SECRET_KEY')}"},
        )
        logging.debug("Paystack Response: %s", response.text)
    except requests.RequestException as e:
        logging.error("RequestException during Paystack verification: %s", e)
        return "Failed to verify payment with Paystack", 500

    if response.status_code == 200:
        data = response.json().get("data", {})
        status = data.get("status")
        if status == "success":
            customer = data.get("customer", {})
            email = customer.get("email")
            if email:
                logging.debug("Email: %s", email)

                # Store user payment credentials in session
                session["email"] = email
                session["is_paid"] = True

                # Check if the user already exists in the database
                user = PaymentStatus.query.filter_by(email=email).first()
                if user:
                    user.is_paid = True
                    db.session.commit()
                else:
                    # Create a new Paymentstatus if it doesn't exist
                    new_user = PaymentStatus(email=email, is_paid=True)
                    db.session.add(new_user)
                    db.session.commit()
                    logging.info("New PaymentStatus entry created for email: %s", email)

                return redirect(url_for("pages.applicant"))
            else:
                logging.error("Email not found in Paystack response")
                return "Email not found in Paystack response", 400
        else:
            logging.error("Payment verification failed: %s", status)
            return f"Payment verification failed: {status}", 400
    else:
        logging.error(
            "Failed to verify payment with Paystack, status code: %d",
            response.status_code,
        )
        return "Failed to verify payment with Paystack", 400


def payment_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        email = session.get("email")
        is_paid = session.get("is_paid")
        current_app.logger.debug(f"email in session: {email}, is_paid: {is_paid}")

        if not email or not is_paid:
            return redirect(url_for("pages.admission"))

        user = PaymentStatus.query.filter_by(email=email).first()

        if not user or not user.is_paid:
            current_app.logger.debug("User not found or not paid in database")
            return redirect(url_for("pages.payment_callback"))

        return f(*args, **kwargs)

    return decorated_function


@pages_bp.route("/store-payment-status", methods=["POST"])
def store_payment_status():
    data = request.json
    if "email" not in data or "is_paid" not in data:
        return jsonify({"error": "Email and is_paid fields are required"}), 400

    email = data["email"]
    is_paid = data["is_paid"]

    try:
        user = PaymentStatus.query.filter_by(email=email).first()
        if user:
            # Update the payment status if the user already exists
            user.is_paid = is_paid
        else:
            # Create a new user entry if the user doesn't exist
            user = PaymentStatus(email=email, is_paid=is_paid)
            db.session.add(user)

        db.session.commit()
        return jsonify({"message": "Payment status stored successfully"}), 200

    except Exception as e:
        db.session.rollback()
        logging.error("Error storing payment status: %s", e)
        return jsonify({"error": "Failed to store payment status"}), 500
