import { axiosBaseQuery } from "@lib/axios/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

const prodUrl = "";
const devUrl = "http://localhost:5000/api/v1";
const baseUrl = process.env.NODE_ENV === "production" ? prodUrl : devUrl;
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery({ baseUrl: baseUrl }),
  endpoints: () => ({}),
});
