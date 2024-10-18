import { LOCAL_STORAGE_KEY } from './constants'
import { messageHtml } from './messageHtml'

export const loadMessages = (messageContainer, id) => {
  const usersLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY);
  const users = usersLocalStorage ? JSON.parse(usersLocalStorage) : [];

  const user = users.find(user => Number(user.id) === Number(id));

  if (user) {
    const messages = user.messages;

    messages.forEach(message => { 
      messageHtml(message, messageContainer) 
    });
  }
}