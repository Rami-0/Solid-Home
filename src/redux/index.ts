import { configureStore } from '@reduxjs/toolkit';
import { generalReducer } from './Slices/general';
import { authReducer } from './Slices/authSlice';

export const store = configureStore({
  reducer: {
    General: generalReducer,
    Auth: authReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
