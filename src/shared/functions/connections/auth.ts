import { User } from "../../../modules/login/types/User";
import { AUTHORIZATION_KEY } from "../../constants/authorization";
import { getItemFromStorage, removeItemFromStorage, setItemInStorage } from "./storage"
import { get } from "./connections";
import { USER_URL } from "../../constants/urls";

export const unsetAuthToken = () => {
    removeItemFromStorage(AUTHORIZATION_KEY);
}

export const setAuthToken = (token?: string) => {
    if (token) {
        setItemInStorage(AUTHORIZATION_KEY, token);
    }
}

export const getAuthToken = () => {
    return getItemFromStorage(AUTHORIZATION_KEY);
}

export const isAuthenticated = async (setUser: (user: User) => void, user?: User) => {
  const token = getAuthToken();
    if (!token) {
      location.href = '/login';
    }
    if (!user) {
      await get<User>(USER_URL)
        .then((userReturn) => {
          setUser(userReturn);
        })
        .catch(() => {
          unsetAuthToken();
          location.href = '/login';
        });
    }
  return null;
}