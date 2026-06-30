from flask import Flask
from flask_cors import CORS

from routes.dashboard import dashboard_bp
from routes.logs import logs_bp

app = Flask(__name__)

CORS(app)

app.register_blueprint(dashboard_bp)
app.register_blueprint(logs_bp)

@app.route("/")
def home():
    return "🚀 SentinelX Backend"

if __name__ == "__main__":
    app.run(debug=True)