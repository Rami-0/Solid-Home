import { createSlice } from '@reduxjs/toolkit';

interface IgeneralSliceType {
	data: any;
}

const generalSlice = createSlice({
	name: 'general',
	initialState: {
		data: [],
	} as IgeneralSliceType,
	reducers: {},
});

export const generalReducer = generalSlice.reducer;
