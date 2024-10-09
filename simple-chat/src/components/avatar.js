import Avatar from '../images/user.png';

export const loadUserAvatar = () => {
  const userAvatar = document.getElementById('user-avatar');

  if (userAvatar) {
    userAvatar.setAttribute('src', Avatar);
  }
}