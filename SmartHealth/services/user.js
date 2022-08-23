// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (builder) => ({
    getUserById: builder.query({
      query: (id) => `user/${id}`,
    }),
    registerUser: builder.mutation({
      query: (userData) => ({
        headers: {
          'Content-type':'application/json'
        },
        url: `user/register`,
        method: 'POST',
        body: userData,
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserByIdQuery, useRegisterUserMutation } = userApi