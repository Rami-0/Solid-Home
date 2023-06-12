import { configureStore } from '@reduxjs/toolkit';
import { generalReducer } from './Slices/general';

export const store = configureStore({
	reducer: {
		General: generalReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
