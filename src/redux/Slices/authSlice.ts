import { createSlice } from '@reduxjs/toolkit';
import { Iuser } from './../../types/user';

const initialState = {
  isAuthenticated: false as boolean,
  user: {} as Iuser | undefined,
  token: '' as string | undefined
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    SetUser(state, { payload }) {
      state.user = payload;
    },
    Login(state) {
      state.isAuthenticated = true;
    },
    Logout(state) {
      state.isAuthenticated = false;
      state.user = undefined;
    }
  }
});

export const { Login, Logout, SetUser } = authSlice.actions;

export const authReducer = authSlice.reducer;
