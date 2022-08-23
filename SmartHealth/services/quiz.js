// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const quizApi = createApi({
  reducerPath: 'quizApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (builder) => ({
    getQuizByCode: builder.query({
      query: (code) => `quiz/${code}`,
    }),
  saveAnswers: builder.mutation({
    query: (data) => ({
      headers: {
        'Content-type':'application/json'
      },
      url: `quiz/save`,
      method: 'POST',
      body: data,
    }),
  }),
}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetQuizByCodeQuery, useSaveAnswersMutation } = quizApi