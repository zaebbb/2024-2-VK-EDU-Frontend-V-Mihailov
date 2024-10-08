import './index.css';
import Avatar from './images/user.png';

const LOCAL_STORAGE_KEY = 'messages';
const USER = 'Владимир Михайлов';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const input = form.querySelector('.form__input');
  const messagesContainer = document.querySelector('.chat-messages');
  
  document.getElementById('user-avatar').setAttribute('src', Avatar);

  form.addEventListener('submit', handleSubmit.bind(this));
  form.addEventListener('keypress', handleKeyPress.bind(this));

  function handleSubmit (event) {
    event.preventDefault();
    const value = input.value;

    if (!value) {
      return;
    }

    const messageInfo = {
      time: getCurrentTime(),
      user: USER,
      message: value,
    };

    addMessage(messageInfo);
    messageHtml(messageInfo)

    input.value = '';
  }

  function handleKeyPress (event) {
    if (event.keyCode === 13) {
      form.dispatchEvent(new Event('submit'));
    }
  }

  function addMessage (messageInfo) {
    if (!localStorage.getItem(LOCAL_STORAGE_KEY)) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([]));
    }

    const messages = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    messages.push(messageInfo);

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(messages));
  }

  function getCurrentTime () {
    const date = new Date();

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${hours}:${minutes}`;
  }

  function loadMessages () {
    const messagesLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY);
    const messages = messagesLocalStorage ? JSON.parse(messagesLocalStorage) : [];

    messages.forEach(messageHtml);
  }

  function messageTemplate (messageInfo) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    
    messageElement.innerHTML = `
      <p class="message__content ${messageInfo.user !== USER ? 'message--participant' : ''}">
        ${messageInfo.message}
      </p>
      <span class="message__time">${messageInfo.time}</span>
    `;
    
    return messageElement;
  }

  function messageHtml (messageInfo) {
    const messageElement = messageTemplate(messageInfo)
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  window.onload = function() {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  };

  loadMessages();
})
