import { axiosBaseQuery } from "@lib/axios/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "constants/baseUrl";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery({ baseUrl: baseUrl }),
  endpoints: () => ({}),
  tagTypes: ["ListApi"],
});
