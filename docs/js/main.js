// Wait for the entire HTML document to load before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Get references to the HTML elements we'll need to interact with
    const sendBtn = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');
    const chatWindow = document.querySelector('.chat-window');
    
    // This is the URL of your Python backend. 
    // We will update the placeholder in the next step.
    const backendUrl = 'https://psychic-space-invention-7x9wwwrwrjxhr74p-5000.app.github.dev//api/ask'; 

    // --- Function to send the message ---
    const sendMessage = async () => {
        const question = userInput.value.trim();
        if (question === '') {
            return; // Don't send empty messages
        }

        // Display the user's question in the chat window
        appendMessage('You', question);
        userInput.value = ''; // Clear the input box

        try {
            // Send the question to the backend using the fetch API
            const response = await fetch(backendUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ question: question }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const aiAnswer = data.answer;

            // Display the AI's answer
            appendMessage('AI Tutor', aiAnswer);

        } catch (error) {
            console.error('Error:', error);
            appendMessage('AI Tutor', 'Sorry, something went wrong. Please check the backend server.');
        }
    };

    // --- Function to add a message to the chat window ---
    const appendMessage = (sender, message) => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatWindow.appendChild(messageElement);
        chatWindow.scrollTop = chatWindow.scrollHeight; // Auto-scroll to the bottom
    };

    // --- Event Listeners ---
    // Listen for a click on the send button
    sendBtn.addEventListener('click', sendMessage);

    // Listen for the "Enter" key press in the input box
    userInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });
});
