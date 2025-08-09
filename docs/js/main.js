document.getElementById("send-btn").addEventListener("click", sendMessage);
document.getElementById("user-input").addEventListener("keypress", function(e) {
    if (e.key === "Enter") sendMessage();
});

function sendMessage() {
    const inputField = document.getElementById("user-input");
    const message = inputField.value.trim();
    if (!message) return;

    addMessage("You", message, "user");

    // Simulated bot response
    setTimeout(() => {
        addMessage("Bot", "This is a sample response.", "bot");
    }, 500);

    inputField.value = "";
}

function addMessage(sender, text, type) {
    const chatBox = document.getElementById("chat-box");
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("message", type);
    msgDiv.textContent = sender + ": " + text;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}
