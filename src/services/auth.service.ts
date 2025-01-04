// import { setTokenToLocalStorage } from "@/utils/localStorage";
// import { authKey } from "constants/authKey";

import { decodedToken } from "@/utils/decodedToken";
import {
  getTokenFromLocalStorage,
  removeCokieFromLocalStorage,
  setTokenToLocalStorage,
} from "@/utils/localStorage";
import { instance as axiosInstance } from "@lib/axios/axiosInstance";
import { authKey } from "constants/authKey";
import { baseUrl } from "constants/baseUrl";

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

export const getNewAccessToken = async () => {
  const refreshToken = await axiosInstance({
    url: `${baseUrl}/auth/refresh-token`,
    method: "POST",
    headers: {
      contentType: "application/json",
    },
    withCredentials: true,
  });

  return refreshToken;
};
