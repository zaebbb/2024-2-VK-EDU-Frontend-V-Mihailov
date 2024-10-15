import { LOCAL_STORAGE_KEY } from './constants';

export const addMessage = (messageInfo, id) => {
  if (localStorage.getItem(LOCAL_STORAGE_KEY)) {
    const chats = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    const chatId = chats.findIndex(chat => Number(chat.id) === Number(id)); 

    chats[chatId].messages.push(messageInfo);

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(chats));
  }
}