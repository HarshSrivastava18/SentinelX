from flask import Blueprint, jsonify
from services.log_service import get_logs

logs_bp = Blueprint("logs", __name__)

@logs_bp.route("/logs")
def logs():
    return jsonify(get_logs())