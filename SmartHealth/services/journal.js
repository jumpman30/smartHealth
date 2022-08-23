// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import axios from "axios";


// Define a service using a base URL and expected endpoints
export const journalApi = createApi({
  reducerPath: 'journalApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (builder) => ({

    saveJournal: builder.mutation({
    query: (data) => ({
      headers: {
        'Content-type':'application/json'
      },
      url: `journal/save`,
      method: 'POST',
      body: data,
    }),
  }),
}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetJournalQuery ,useSaveJournalMutation } = journalApi


export async function getJournal(email){


    const url = 'http://localhost:3001/journal/'

    const response = await axios.get(url, {params:{ email: email}});

    return response.data;
}