import { createSlice } from '@reduxjs/toolkit';
import { Iuser, IuserCreds } from '../../types/user';

const initialState = {
  isAuthenticated: false as boolean,
  user: {} as Iuser | IuserCreds | undefined,
  token: '' as string | undefined,
  loading: false as boolean
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
  },
  extraReducers: (builder) => {
    // // CREATE pizza
    // builder.addCase(fetchCreatePizza.fulfilled, (state, action) => {
    // 	state.pizzaData.push(action.payload);
    // 	state.isCreating = "success";
    // });
    // builder.addCase(fetchCreatePizza.pending, (state) => {
    // 	state.isCreating = "pending";
    // });
    // // GET pizzas
    // builder.addCase(fetchPizzas.fulfilled, (state, action) => {
    // 	state.pizzaData = action.payload;
    // 	state.progress = 100;
    // });
    // builder.addCase(fetchPizzas.pending, (state) => {
    // 	state.progress = 65;
    // });
    // builder.addCase(fetchPizzas.rejected, (state, action) => {
    // 	state.error = action.payload;
    // 	state.progress = 100;
    // });
    // //DELETE PIZZA
    // builder.addCase(fetchDeletePizza.fulfilled, (state, action) => {
    // 	state.pizzaData = state.pizzaData.filter(
    // 		(item) => item.id !== action.payload.id
    // );
  }
  // );
});

export const { Login, Logout, SetUser } = authSlice.actions;

export const authReducer = authSlice.reducer;
