import { getUserInfo } from './getUserInfo';

export const loadUserInfo = (id) => {
  const user = getUserInfo(id);
  const profileNameElement = document.getElementById('profile-name');

  if (user && profileNameElement) {
    profileNameElement.textContent = user.name;
  }
}