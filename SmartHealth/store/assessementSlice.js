import { createSlice } from '@reduxjs/toolkit'

export const assessementSlice = createSlice({
  name: 'assessement',
  initialState: {
    designation: 'EAS-21',
    result: [],
  },
  reducers: {
    
    addResult: (state, action) => {
        
        //action.payload will be the answer to [i] question
        state.result.push(action.payload);
    },

    setResults: (state, action) => {

        state.result = action.payload;
    }
  },
})

export const { addResult, setResults } = assessementSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectResult = (state) => state.assessement.result
export const selectDesignation = (state) => state.assessement.designation

export default assessementSlice.reducer
