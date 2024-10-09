import { LOCAL_STORAGE_KEY } from './constants';

export const addMessage = (messageInfo) => {
  if (!localStorage.getItem(LOCAL_STORAGE_KEY)) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([]));
  }

  const messages = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

  messages.push(messageInfo);

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(messages));
}