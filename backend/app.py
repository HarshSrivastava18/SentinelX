from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

# Allow only the React development server
CORS(
    app,
    resources={
        r"/*": {
            "origins": "http://localhost:5173"
        }
    }
)

@app.route("/")
def home():
    return "🚀 Welcome to SentinelX Backend!"

@app.route("/health")
def health():
    return jsonify({
        "status": "OK",
        "message": "Backend is running successfully!",
        "version": "1.0.0"
    })

if __name__ == "__main__":
    app.run(debug=True)