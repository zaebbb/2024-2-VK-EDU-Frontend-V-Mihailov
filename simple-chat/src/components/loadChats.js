import Avatar from '../images/user.png';
import { LOCAL_STORAGE_KEY } from "./constants";

export const loadChats = () => {
  const users = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  const chatsContainer = document.getElementById('chats-list');

  if (chatsContainer) {
    users.forEach(user => {
      let lastMessage = user.messages.at(-1);
      const chat = document.createElement('a');
      chat.setAttribute('href', `./chat.html?id=${user.id}`);
      chat.className = 'chat-user';

      if (!lastMessage) {
        lastMessage = {
          time: '',
          message: 'Новый чат',
        };
      }

      chat.innerHTML = `
        <img 
          src="${Avatar}" 
          alt="${user.name}"
          class="chat-user__avatar"
        >

        <div class="chat-user-info">
          <div class="chat-user-message">
            <h3 class="user-message__username">
              ${user.name}
            </h3>

            <p class="user-message__text">
              ${lastMessage.message}
            </p>
          </div>

          <div class="chat-user-properties">
            <span class="user-properties__time">
              ${lastMessage.time}
            </span>

            <span class="user-properties__status user-properties__status--new-message">
              99
            </span>
          </div>
        </div>
      `;

      chatsContainer.appendChild(chat);
    })
  }
}