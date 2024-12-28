/* eslint-disable @typescript-eslint/ban-ts-comment */
import { TErrorResponseBody, TSuccessResponseBody } from "@/types/common";
import { getTokenFromLocalStorage } from "@/utils/localStorage";
import axios from "axios";
import { authKey } from "constants/authKey";

export const instance = axios.create();

instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers.put["Content-Type"] = "application/json";
instance.defaults.headers.patch["Content-Type"] = "application/json";
instance.defaults.headers.delete["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const accessToken = getTokenFromLocalStorage(authKey);
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  //@ts-expect-error
  function (response) {
    // Do something with response data
    const successResponseBody: TSuccessResponseBody = {
      data: response?.data?.data,
      meta: response?.data?.meta,
      statusCode: response?.data?.statusCode || 200,
      success: response?.data?.status || true,
      message: response?.data?.message || "Success",
    };
    return successResponseBody;
  },
  function (error) {
    // Do something with response error
    const errorResponse: TErrorResponseBody = {
      statusCode: error?.response?.data?.statusCode || 500,
      success: error?.response?.data?.status || false,
      message: error?.response?.data?.message || "Something went wrong",
      errorMessage: error?.response?.data?.message || "Something went wrong",
    };
    return errorResponse;
  }
);
