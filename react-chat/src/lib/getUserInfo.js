import { LOCAL_STORAGE_KEY } from "../utils/constants";

export const getUserInfo = (id) => {
  const usersLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY);
  const users = usersLocalStorage ? JSON.parse(usersLocalStorage) : [];

  const user = users.find(user => Number(user.id) === Number(id));

  if (user) {
    return user;
  }
}