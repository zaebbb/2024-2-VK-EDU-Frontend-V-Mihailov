import { LOCAL_STORAGE_KEY } from "./constants";
import { getRandomFullname } from "./getRandomFullname";

export const newChat = () => {
  const fullName = getRandomFullname();
  const id = Date.now();

  const chat = {
    id: id, 
    name: fullName, 
    timeOnline: '14:45',
    messages: [],
  };

  const usersLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY);
  const chats = usersLocalStorage ? JSON.parse(usersLocalStorage) : [];

  chats.push(chat)

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(chats));

  window.location.href = `chat.html?id=${id}`;
}