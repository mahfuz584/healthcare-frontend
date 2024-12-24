export const setTokenToLocalStorage = (key: string, token: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.setItem(key, token);
};

export const getTokenFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  const token = localStorage.getItem(key);
  return token;
};

export const removeCokieFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.removeItem(key);
};
