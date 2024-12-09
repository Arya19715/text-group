const messageInput = document.getElementById('messageInput');
const sendMessageButton = document.getElementById('sendMessageButton');
const chatMessages = document.getElementById('chatMessages');

sendMessageButton.addEventListener('click', () => {
  const messageText = messageInput.value;
  if (messageText.trim() === '') return;

  const messageElement = document.createElement('div');
  messageElement.classList.add('message');

  messageElement.innerHTML = `
    <div class="sender-info">
      <img src="https://arya19715.github.io/group-project/images/marie.jpg" alt="Your Profile" class="sender-image"> 
      <span class="message-sender">You</span>
    </div>
    <span class="message-time">${new Date().toLocaleTimeString()}</span>
    <span class="message-text message-text-left">${messageText}</span>
  `;

  chatMessages.appendChild(messageElement);
  messageInput.value = '';

  // Scroll to the bottom of the chat messages
  chatMessages.scrollTop = chatMessages.scrollHeight;
});