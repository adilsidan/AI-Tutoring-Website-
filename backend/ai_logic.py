from groq import Groq
import os

def get_ai_response(question):
    client = Groq(api_key=os.environ.get("AI_API_KEY"))
    
    chat_completion = client.chat.completions.create(
        messages=[
            {"role": "system", "content": "You are a helpful AI tutor. Answer questions clearly and simply."},
            {"role": "user", "content": question}
        ],
        model="llama-3.3-70b-versatile",
    )
    
    return chat_completion.choices[0].message.content