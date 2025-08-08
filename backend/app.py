from flask import Flask, jsonify, request
from flask_cors import CORS

# Initialize the Flask app
app = Flask(__name__)
# Enable CORS to allow our frontend to communicate with this backend
CORS(app)


# Define a route for our API. It will accept POST requests.
@app.route('/api/ask', methods=['POST'])
def ask_question():
    # All code in this block has 4 spaces
    data = request.get_json()
    user_question = data.get('question')

    print(f"Received question: {user_question}")

    response_data = {
        "answer": f"This is a test response from Python for your question: '{user_question}'"
    }

    return jsonify(response_data)


# This block runs the app. It has NO indentation.
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

