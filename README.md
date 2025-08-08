![banner](designs/banner.png)
# AI Tutor Website 🤖

Making learning more accessible and effective with a 24/7 AI-powered personal tutor, ready to help with any question you ask

---

## ✨ Features

-   **Personalized Learning Paths:** The AI adapts to the student's level and provides questions accordingly.
-   **Instant Feedback:** Get immediate corrections and explanations for your answers.
-   **Socratic Dialogue:** The tutor asks guiding questions to help students discover the answers themselves.
-   **24/7 Availability:** Learn anytime, anywhere.

## 🛠️ Tech Stack

-   **Frontend:** HTML, CSS, JavaScript
-   **Backend:** Python (Flask/FastAPI)
-   **AI:** Gemini API / OpenAI GPT-4 API (or specify your choice)
-   **Deployment:** GitHub Pages / Replit / Vercel (you can fill this in later)

## 📁 Folder Structure

```
ai-tutor-website/
│
├── .gitignore
├── README.md
│
├── backend/
│   ├── app.py
│   ├── ai_logic.py
│   └── requirements.txt
│
└── frontend/
    ├── index.html
    ├── css/
    │   └── style.css
    └── js/
        └── main.js
```

## 🚀 Getting Started

Instructions on how to set up and run the project locally.

### Prerequisites

-   Python 3.x
-   A text editor (like VS Code or using GitHub Codespaces)
-   An API key from your chosen AI provider (e.g., Google AI Studio or OpenAI)

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/your-username/ai-tutor-website.git](https://github.com/your-username/ai-tutor-website.git)
    cd ai-tutor-website
    ```

2.  **Set up the Backend:**
    ```sh
    cd backend
    pip install -r requirements.txt
    ```

3.  **Set up Environment Variables:**
    Create a file named `.env` inside the `backend` folder and add your API key:
    ```
    AI_API_KEY="your_secret_api_key_here"
    ```

4.  **Run the Backend Server:**
    ```sh
    python app.py
    ```

5.  **Launch the Frontend:**
    Open the `index.html` file in the `frontend` folder in your browser.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.
