import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const moodApi = createApi({
  reducerPath: 'moodApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (builder) => ({

  saveMood: builder.mutation({
    query: (data) => ({
      headers: {
        'Content-type':'application/json'
      },
      url: `mood/save`,
      method: 'POST',
      body: data,
    }),
  }),
}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSaveMoodMutation } = moodApi