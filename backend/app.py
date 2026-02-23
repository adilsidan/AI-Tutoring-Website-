from flask import Flask, jsonify, request
from flask_cors import CORS
from ai_logic import get_ai_response

app = Flask(__name__)
CORS(app)

@app.route('/api/ask', methods=['POST'])
def ask_question():
    data = request.get_json()
    user_question = data.get('question')
    
    answer = get_ai_response(user_question)
    
    return jsonify({"answer": answer})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)