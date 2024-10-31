import { getUserInfo } from './getUserInfo';
import { messageHtml } from './messageHtml'

export const loadMessages = (messageContainer, id) => {
  const user = getUserInfo(id);

  if (user) {
    const messages = user.messages;

    messages.forEach(message => { 
      messageHtml(message, messageContainer) 
    });
  }
}