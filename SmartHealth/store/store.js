import { configureStore} from '@reduxjs/toolkit';
import assessementReducer from './assessementSlice';
import { setupListeners } from '@reduxjs/toolkit/query'
import { userApi } from '../services/user';
import { quizApi } from '../services/quiz';
import { moodApi } from '../services/mood';
import { journalApi } from '../services/journal';
import journalReducer from './journalSlice';



export default store = configureStore({
  reducer: {
    assessement: assessementReducer,
    journal: journalReducer,
    [userApi.reducerPath]: userApi.reducer,
    [quizApi.reducerPath]: quizApi.reducer,
    [moodApi.reducerPath]: moodApi.reducer,
    [journalApi.reducerPath]: journalApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, quizApi.middleware, moodApi.middleware, journalApi.middleware),
});

setupListeners(store.dispatch);
