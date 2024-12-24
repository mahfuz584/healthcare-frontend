// import { setTokenToLocalStorage } from "@/utils/localStorage";
// import { authKey } from "constants/authKey";

import {
  getTokenFromLocalStorage,
  removeCokieFromLocalStorage,
  setTokenToLocalStorage,
} from "@/utils/localStorage";
import { authKey } from "constants/authKey";
import { jwtDecode } from "jwt-decode";

export const storeUserInfo = (token: string) => {
  return setTokenToLocalStorage(authKey, token);
};

export const getUserInfo = () => {
  const authToken = getTokenFromLocalStorage(authKey);

  if (authToken) {
    const decodedToken = jwtDecode(authToken);
    return decodedToken;
  }
};

export const isUserLoggedIn = () => {
  return !!getUserInfo();
};

export const removeUser = () => {
  return removeCokieFromLocalStorage(authKey);
};
