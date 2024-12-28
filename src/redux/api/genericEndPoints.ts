import { baseApi } from "./baseApi";

const genericApi = () => {
  return baseApi.injectEndpoints({
    endpoints: (builder) => ({
      listApi: builder.query({
        query: ({ url }) => {
          return {
            url: `${url}`,
            method: "GET",
          };
        },
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
      }),
      putApi: builder.mutation({
        query: ({ url, id, data }) => {
          return {
            url: `${url}/${id}`,
            method: "PUT",
            data,
          };
        },
      }),
      deleteApi: builder.mutation({
        query: ({ url, id }) => {
          return {
            url: `${url}/${id}`,
            method: "DELETE",
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
  usePutApiMutation,
  useDeleteApiMutation,
} = genericApi();
