import { baseApi } from "./baseApi";

const genericApi = () => {
  return baseApi.injectEndpoints({
    endpoints: (builder) => ({
      listApi: builder.query({
        query: ({ url, query }) => {
          return {
            url: `${url}`,
            method: "GET",
            params: query,
          };
        },
        providesTags: ["ListApi"],
      }),
      retrieveApi: builder.query({
        query: ({ url, id }) => {
          return {
            url: `${url}/${id}`,
            method: "GET",
          };
        },
      }),
      createApi: builder.mutation({
        query: ({ url, data, contentType }) => {
          return {
            url: `${url}`,
            contentType: contentType,
            method: "POST",
            data,
          };
        },
        invalidatesTags: ["ListApi"],
      }),
      updateApi: builder.mutation({
        query: ({ url, id, contentType, data }) => {
          return {
            url: `${url}/${id}`,
            contentType: contentType,
            method: "PATCH",
            data,
          };
        },
        invalidatesTags: ["ListApi"],
      }),
      deleteApi: builder.mutation({
        query: ({ url, id }) => {
          return {
            url: `${url}/${id}`,
            method: "DELETE",
          };
        },
        invalidatesTags: ["ListApi"],
      }),
      getInfoApi: builder.query({
        query: ({ url }) => {
          return {
            url: `${url}`,
            method: "GET",
          };
        },
      }),
    }),
  });
};

export const {
  useListApiQuery,
  useRetrieveApiQuery,
  useCreateApiMutation,
  useUpdateApiMutation,
  useDeleteApiMutation,
  useGetInfoApiQuery,
} = genericApi();
