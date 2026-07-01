from flask import Blueprint, request, jsonify
from services.log_service import get_logs, create_log

logs_bp = Blueprint("logs", __name__)

# GET all logs
@logs_bp.route("/logs", methods=["GET"])
def fetch_logs():
    logs = get_logs()
    return jsonify(logs)

# POST new log
@logs_bp.route("/logs", methods=["POST"])
def add_log():
    data = request.get_json()

    create_log(data)

    return jsonify({
        "message": "Log created successfully"
    }), 201