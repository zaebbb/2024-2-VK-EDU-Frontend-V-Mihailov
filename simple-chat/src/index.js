import './index.css';
import './styles/header.css';
import './styles/chat-form.css';
import './styles/chat.css';
import './styles/add-message.css';
import './styles/chats-list.css';

import { loadUserAvatar } from './components/avatar';
import { loadMessages } from './components/loadMessages';
import { addMessage } from './components/addMessage';
import { getCurrentTime } from './components/utils';
import { messageHtml } from './components/messageHtml';
import { loadChats } from './components/loadChats';
import { loadUserInfo } from './components/loadUserInfo';
import { saveMockData } from './components/saveMockData';
import { newChat } from './components/newChat';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const messagesContainer = document.querySelector('.chat-messages');
  const newChatButton = document.querySelector('.add-message');

  if (form && messagesContainer) {
    const input = form.querySelector('.form__input');
    const url = new URLSearchParams(window.location.search);
    const id = url.get('id')

    form.addEventListener('submit', handleSubmit.bind(this));
    form.addEventListener('keypress', handleKeyPress.bind(this));

    function handleSubmit (event) {
      event.preventDefault();
      const value = input.value.trim();

      if (!value) {
        return;
      }

      const messageInfo = {
        time: getCurrentTime(),
        isUser: false,
        message: value,
      };

      addMessage(messageInfo, id);
      messageHtml(messageInfo, messagesContainer)

      input.value = '';
    }

    function handleKeyPress (event) {
      if (event.keyCode === 13) {
        form.dispatchEvent(new Event('submit'));
      }
    }

    window.onload = function() {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    };

    loadMessages(messagesContainer, id);
    loadUserInfo(id);
    loadUserAvatar();
  }

  if (newChatButton) {
    newChatButton.addEventListener('click', newChat)
  }
  
  saveMockData();
  loadChats();
})
