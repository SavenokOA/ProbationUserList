import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApiServices = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_API_URL }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => '/users',
      providesTags: (result) => ['User']
    }),
    updateUser: builder.mutation({
      query: (user) => ({
        url: `/users/${user.id}`,
        method: 'PUT',
        body: user
      }),
      invalidatesTags: ['User']
    })
  })
});

console.log(userApiServices);

export const { useGetAllUsersQuery, useUpdateUserMutation } = userApiServices;
