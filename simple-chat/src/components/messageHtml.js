import { USER } from './constants'

const messageTemplate = (messageInfo) => {
  const messageElement = document.createElement('div');
  messageElement.className = `message ${messageInfo.isUser ? 'message--participant' : ''}`;
  
  messageElement.innerHTML = `
    <p class="message__content">
      ${messageInfo.message}
    </p>
    <span class="message__time">${messageInfo.time}</span>
  `;
  
  return messageElement;
}

export const messageHtml = (
  messageInfo,
  messagesContainer
) => {
  const messageElement = messageTemplate(messageInfo)
  messagesContainer.appendChild(messageElement);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}