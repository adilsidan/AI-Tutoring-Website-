// Get references to the HTML elements we'll need to interact with
const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const chatWindow = document.querySelector('.chat-window');

// Function to add a user's message to the chat window
function displayUserMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.className = 'message user-message';
    messageElement.textContent = message;
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom
}

// Function to add the AI's message to the chat window
function displayAiMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.className = 'message ai-message';
    messageElement.textContent = message;
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom
}

// This is the main function that runs when the send button is clicked
function handleSendMessage() {
    const message = userInput.value.trim();

    // If the input isn't empty, proceed
    if (message) {
        // 1. Display the user's message
        displayUserMessage(message);

        // 2. Clear the input box
        userInput.value = '';

        // 3. Simulate an AI response (we will replace this later)
        setTimeout(() => {
            displayAiMessage('Thinking...');
            // In the future, we'll call the real AI here.
            // For now, let's just pretend with another timeout.
            setTimeout(() => {
                // Remove the "Thinking..." message if you want
                const thinkingMsg = document.querySelector('.ai-message:last-child');
                thinkingMsg.textContent = 'This is a placeholder response from the frontend. The backend is next!';
            }, 1500);
        }, 500);
    }
}

// Tell the browser to listen for clicks on the send button
sendBtn.addEventListener('click', handleSendMessage);

// Also allow pressing 'Enter' to send the message
userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleSendMessage();
    }
});

