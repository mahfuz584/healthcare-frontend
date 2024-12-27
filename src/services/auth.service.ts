// import { setTokenToLocalStorage } from "@/utils/localStorage";
// import { authKey } from "constants/authKey";

import { decodedToken } from "@/utils/decodedToken";
import {
  getTokenFromLocalStorage,
  removeCokieFromLocalStorage,
  setTokenToLocalStorage,
} from "@/utils/localStorage";
import { authKey } from "constants/authKey";

export const storeUserInfo = (token: string) => {
  return setTokenToLocalStorage(authKey, token);
};

export const getUserInfo = () => {
  const authToken = getTokenFromLocalStorage(authKey);

  if (authToken) {
    const decodedData: any = decodedToken(authToken);
    return {
      ...decodedData,
      role: decodedData?.role?.toLowerCase(),
    };
  } else {
    return "";
  }
};
export const isUserLoggedIn = () => {
  return !!getUserInfo();
};

export const removeUser = () => {
  return removeCokieFromLocalStorage(authKey);
};
