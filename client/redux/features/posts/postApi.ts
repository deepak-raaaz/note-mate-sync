import { apiSlice } from "../api/apiSlice";

export const postApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
      getAllPosts: builder.query({
        query:(data) => ({
          url: "posts",
          method:"GET",
          credentials: "include" as const,
        }),
      })
    }),
  });
  
  
  export const { useGetAllPostsQuery } = postApi;
  