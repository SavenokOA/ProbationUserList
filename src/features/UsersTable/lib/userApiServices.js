import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApiServices = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: (import.meta.env.VITE_BASE_API_URL) }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => `/users`
    })
  })
});

export const { useGetAllUsersQuery } = userApiServices;
