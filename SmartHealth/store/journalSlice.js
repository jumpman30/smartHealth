import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import axios from "axios";


export const setJournal = createAsyncThunk(
  "journal/setJournal",
  async (email) => {
    const url = 'http://localhost:3001/journal/'

    const response = await axios.get(url, {params:{ email: email}});

    return response.data.rows;
  });

  export const addNote = createAsyncThunk(
    "journal/addNote",
    async (data) => {
      const url = 'http://localhost:3001/journal/save'
      console.log(data);
  
      const response = await axios.post(url, data);
  
      return  data.note;  
    });

  export const deleteNote = createAsyncThunk(
    "journal/deactivate",
    async (data) => {
      const url = 'http://localhost:3001/journal/deactivate'
      console.log(data);
      
      const response = await axios.post(url, data);
    
      return  data.index;  
      });

  

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    userJournal: []
  },
  reducers: {},

  extraReducers:{

    [setJournal.rejected] : (state, action) => {
      console.log('rejected');
    },
    [setJournal.fulfilled] : (state, action) => {
        let notes_aux = [];
        action.payload.forEach(el => {
          notes_aux.push({date: el.created_at, note: el.note})
        })
        state.userJournal = notes_aux;
    },
    [addNote.rejected] : (state, action) => {
        console.log('rejected');
    }, 

    [addNote.fulfilled] : (state, action) => {
        console.log('success');
        state.userJournal.push(action.payload);
      },
    [deleteNote.rejected] : (state, action) => {
        console.log('rejected');
    }, 

    [deleteNote.fulfilled] : (state, action) => {
        console.log('success');
        state.userJournal.splice(action.payload, 1);
      },
  }
})

//export const { deleteNote } = journalSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectJournal = (state) => state.journal.userJournal

export default journalSlice.reducer