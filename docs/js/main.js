document.addEventListener('DOMContentLoaded', () => {

  const sendBtn = document.getElementById('send-btn');
  const userInput = document.getElementById('user-input');
  const chatWindow = document.querySelector('.chat-window');
  const toggleBtn = document.getElementById('dark-mode-toggle');
  const body = document.body;

  const backendUrl = 'https://psychic-space-invention-7x9wwwrwrjxhr74p-5000.app.github.dev/api/ask';

  // Load saved dark mode preference
  if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    toggleBtn.textContent = '☀️';
  }

  // Dark mode toggle handler
  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
      toggleBtn.textContent = '☀️';
    } else {
      localStorage.setItem('darkMode', 'disabled');
      toggleBtn.textContent = '🌙';
    }
  });

  const sendMessage = async () => {
    const question = userInput.value.trim();
    if (question === '') return;

    appendMessage('You', question);
    userInput.value = '';
    sendBtn.disabled = true;

    try {
      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      const aiAnswer = data.answer || 'Sorry, no answer received.';

      appendMessage('AI Tutor', aiAnswer);

    } catch (error) {
      console.error('Error:', error);
      appendMessage('AI Tutor', 'Sorry, something went wrong. Please check the backend server.');
    } finally {
      sendBtn.disabled = false;
      userInput.focus();
    }
  };

  const appendMessage = (sender, message) => {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  };

  sendBtn.addEventListener('click', sendMessage);
  userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
  });

});
