import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Iuser, loginCreds, otp } from '../../types/user';
import {
  _createVerificationData,
  _login,
  _registerUser,
  _verificatCode
} from '../../api/api_login_register';
import { VerificationData } from './../../types/user';

export const fetchLogin = createAsyncThunk(
  'Auth/login',
  async ({ email, phone_number, password }: loginCreds) => {
    const res = await _login({ email, phone_number, password });
    return res.data;
  }
);
export const fetchRegister = createAsyncThunk(
  'Auth/Register',
  async ({ first_name, last_name, email, phone_number }: Iuser) => {
    const res = await _registerUser({ first_name, last_name, email, phone_number });
    return res.data;
  }
);
export const fetchCreateVerification = createAsyncThunk(
  'Auth/verification/data',
  async (data: VerificationData) => {
    const res = await _createVerificationData(data);
    return res.data;
  }
);
export const fetchVerificatCode = createAsyncThunk('Auth/verification', async (data: otp) => {
  const res = await _verificatCode(data);
  return res.data;
});

const initialState = {
  isAuthenticated: false as boolean,
  auth: {} as Iuser | undefined,
  token: '' as string | undefined,
  loading: false as boolean
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    SetUser(state, { payload }) {
      state.auth = payload;
    }
    // Login(state) {
    //   state.isAuthenticated = true;
    // },
    // Logout(state) {
    //   state.isAuthenticated = false;
    //   state.auth = undefined;
    // }
  },
  extraReducers: (builder) => {
    //! Login handle
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      console.log('done');
    });
    builder.addCase(fetchLogin.pending, (state) => {
      console.log('wait...');
      // state.isCreating = 'pending';
    });
    builder.addCase(fetchLogin.rejected, (state) => {
      console.log('fail');
      // state.isCreating = 'pending';
    });
    //! Register handle
    builder.addCase(fetchRegister.fulfilled, (state, action) => {
      console.log('Register request fulfilled:', action.meta.arg);
      state.auth = action.meta.arg;
    });
    builder.addCase(fetchRegister.pending, (state) => {
      console.log('wait...');
      // state.isCreating = 'pending';
    });
    builder.addCase(fetchRegister.rejected, (state) => {
      console.log('fail');
      // state.isCreating = 'pending';
    });
    //! create verification handle
    builder.addCase(fetchCreateVerification.fulfilled, (state, action) => {
      console.log('sent');
    });
    builder.addCase(fetchCreateVerification.pending, (state) => {
      console.log('wait...');
      // state.isCreating = 'pending';
    });
    builder.addCase(fetchCreateVerification.rejected, (state) => {
      console.log('fail');
      // state.isCreating = 'pending';
    });
    //! verificatCode handle
    builder.addCase(fetchVerificatCode.fulfilled, (state, action) => {
      console.log('sent');
      console.log(action);
    });
    builder.addCase(fetchVerificatCode.pending, (state) => {
      console.log('wait...');
      // state.isCreating = 'pending';
    });
    builder.addCase(fetchVerificatCode.rejected, (state) => {
      console.log('fail');
      // state.isCreating = 'pending';
    });
  }
  // );
});

export const { SetUser } = authSlice.actions;

export const authReducer = authSlice.reducer;
