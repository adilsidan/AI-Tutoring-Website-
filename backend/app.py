from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/api/ask', methods=['POST'])
def ask_question():
    
    data = request.get_json()
    user_question = data.get('question')

    print(f"Received question: {user_question}")

    response_data = {
        "answer": f"This is a test response from Python for your question: '{user_question}'"
    }

    return jsonify(response_data)



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

