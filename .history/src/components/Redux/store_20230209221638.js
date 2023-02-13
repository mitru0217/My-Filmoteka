import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'components/Redux/Auth/sliceAuth';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
