import {configureStore} from '@reduxjs/toolkit';
import {ariclesApiSlice} from './features/articles/articlesApiSlice';
import userReducer from './features/user/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [ariclesApiSlice.reducerPath]: ariclesApiSlice.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(ariclesApiSlice.middleware);
  },
});
