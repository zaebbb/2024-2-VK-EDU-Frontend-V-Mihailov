import { LOCAL_STORAGE_KEY } from "../utils/constants";
import { getCurrentTime } from "../utils/getCurrentTime";

export const saveMessage = (userId, message) => {
  const messageInfo = {
    time: getCurrentTime(),
    isUser: false,
    message: message,
  };

  if (localStorage.getItem(LOCAL_STORAGE_KEY)) {
    const chats = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    const chatId = chats.findIndex(chat => Number(chat.id) === Number(userId)); 

    chats[chatId].messages.push(messageInfo);

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(chats));
  }
}