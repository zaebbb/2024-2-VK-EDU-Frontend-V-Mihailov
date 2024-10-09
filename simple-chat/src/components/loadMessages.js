import { LOCAL_STORAGE_KEY } from './constants'
import { messageHtml } from './messageHtml'

export const loadMessages = (messageContainer) => {
  const messagesLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY);
  const messages = messagesLocalStorage ? JSON.parse(messagesLocalStorage) : [];

  messages.forEach(message => { 
    messageHtml(message, messageContainer) 
  });
}