import google.generativeai as genai
import os

def get_ai_response(question):
    genai.configure(api_key=os.environ.get("AI_API_KEY"))
    model = genai.GenerativeModel("gemini-2.0-flash")
    
    prompt = f"You are a helpful AI tutor. Answer this question clearly and simply: {question}"
    
    response = model.generate_content(prompt)
    return response.text
