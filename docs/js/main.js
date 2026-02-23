document.addEventListener('DOMContentLoaded', () => {
  const sendBtn = document.getElementById('send-btn');
  const userInput = document.getElementById('user-input');
  const chatWindow = document.getElementById('chat-window');
  const emptyState = document.getElementById('empty-state');

  const backendUrl = 'https://ai-tutor-backend-4btu.onrender.com/api/ask';

  const hideEmptyState = () => {
    if (emptyState) emptyState.style.display = 'none';
  };

  const appendMessage = (sender, text) => {
    hideEmptyState();
    const msg = document.createElement('div');
    msg.classList.add('message', sender === 'You' ? 'user' : 'ai');

    const label = document.createElement('div');
    label.classList.add('message-label');
    label.textContent = sender === 'You' ? 'You' : 'AI Tutor';

    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.textContent = text;

    msg.appendChild(label);
    msg.appendChild(bubble);
    chatWindow.appendChild(msg);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  };

  const showTyping = () => {
    hideEmptyState();
    const indicator = document.createElement('div');
    indicator.classList.add('typing-indicator');
    indicator.id = 'typing-indicator';

    const label = document.createElement('div');
    label.classList.add('typing-label');
    label.textContent = 'AI Tutor';

    const bubble = document.createElement('div');
    bubble.classList.add('typing-bubble');
    bubble.innerHTML = '<span></span><span></span><span></span>';

    indicator.appendChild(label);
    indicator.appendChild(bubble);
    chatWindow.appendChild(indicator);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  };

  const hideTyping = () => {
    const indicator = document.getElementById('typing-indicator');
    if (indicator) indicator.remove();
  };

  const sendMessage = async () => {
    const question = userInput.value.trim();
    if (!question) return;

    appendMessage('You', question);
    userInput.value = '';
    sendBtn.disabled = true;
    showTyping();

    try {
      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      hideTyping();
      appendMessage('AI Tutor', data.answer || 'Sorry, no answer received.');

    } catch (error) {
      console.error('Error:', error);
      hideTyping();
      appendMessage('AI Tutor', 'Sorry, something went wrong. Please try again.');
    } finally {
      sendBtn.disabled = false;
      userInput.focus();
    }
  };

  // Suggestion chip clicks — defined after sendMessage so it's in scope
  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.preventDefault();
      userInput.value = chip.textContent.trim();
      sendMessage();
    });
  });

  sendBtn.addEventListener('click', sendMessage);
  userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
  });
});
