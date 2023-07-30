import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Iuser, loginCreds, otp, password } from '../../types/user';
import {
  _createVerificationData,
  _login,
  _getUserData,
  _registerUser,
  _setPassword,
  _verificatCode,
  _loginWithToken
} from '../../api/axios';
import { VerificationData } from './../../types/user';

export const fetchLogin = createAsyncThunk(
  'Auth/login',
  async ({ email, phone_number, password }: loginCreds) => {
    const res = await _login({ email, phone_number, password });
    return res;
  }
);

export const fetchLoginWithToken = createAsyncThunk(
  'Auth/refreshToken',
  async (refresh: string) => {
    const res = await _loginWithToken(refresh);
    return res;
  }
);

export const fetchUserData = createAsyncThunk('Auth/UserData', async (accessToken: string) => {
  const res = await _getUserData(accessToken);
  return res;
});

export const fetchRegister = createAsyncThunk(
  'Auth/Register',
  async ({ first_name, last_name, email, phone_number }: Iuser) => {
    const res = await _registerUser({ first_name, last_name, email, phone_number });
    return res;
  }
);
export const fetchCreateVerification = createAsyncThunk(
  'Auth/verification/data',
  async (data: VerificationData) => {
    const res = await _createVerificationData(data);
    return res;
  }
);
export const fetchVerificatCode = createAsyncThunk('Auth/verification', async (data: otp) => {
  const res = await _verificatCode(data);
  return res;
});

export const fetchPasswordCreate = createAsyncThunk(
  'Auth/Register',
  async ({ user_id, password1, password2 }: password) => {
    const res = await _setPassword({ user_id, password1, password2 });
    return res;
  }
);

const initialState = {
  isAuthenticated: false as boolean,
  auth: {} as Iuser | undefined,
  user_id: undefined as number | undefined,
  loading: false as boolean
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    SetUser(state, { payload }) {
      state.auth = payload;
    },
    handleLogout(state) {
      state.isAuthenticated = false;
      state.auth = undefined;
    }
  },

  extraReducers: (builder) => {
    //! Login handle
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      if (state.auth) state.auth.accessToken = action.payload.access;
      state.isAuthenticated = true;
      state.loading = false;
    });
    builder.addCase(fetchLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchLogin.rejected, (state) => {
      state.loading = false;
    });

    //! Register handle
    builder.addCase(fetchRegister.fulfilled, (state, action) => {
      console.log(action);
      state.auth = action.meta.arg;
      state.user_id = action.payload?.['200'].user_id;
      state.loading = false;
    });
    builder.addCase(fetchRegister.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRegister.rejected, (state) => {
      state.loading = false;
    });

    //! handle verificat Code
    builder.addCase(fetchVerificatCode.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(fetchVerificatCode.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchVerificatCode.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(fetchCreateVerification.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(fetchCreateVerification.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCreateVerification.rejected, (state) => {
      state.loading = false;
    });

    //? handle user
    builder.addCase(fetchUserData.fulfilled, (state, { payload }) => {
      state.isAuthenticated = true;
      state.auth = {
        ...state.auth,
        first_name: payload?.first_name,
        last_name: payload?.last_name,
        phone_number: payload?.phone_number,
        email: payload?.email,
        roles: [1]
      };
    });

    builder.addCase(fetchLoginWithToken.fulfilled, (state) => {
      state.isAuthenticated = true;
      console.log('yes');
      state.loading = false;
    });
    builder.addCase(fetchLoginWithToken.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchLoginWithToken.rejected, (state) => {
      state.loading = false;
    });
  }
  // );
});

export const { SetUser, handleLogout } = authSlice.actions;

export const authReducer = authSlice.reducer;
