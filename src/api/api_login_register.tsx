import axios from 'axios';
import { Iuser } from '../types/user';

interface loginType {
  user: string;
  password: string;
}
interface password {
  password: string;
  confirmPassword: string;
}
interface VerificationData {
  email: string;
  phoneNumber: string;
  send_to_phone_number: boolean;
  send_to_email: boolean;
}
interface otp {
  verification_code: string;
}

export const api = axios.create({
  baseURL: '13.48.58.81:8000/my_auth/api',
  headers: { 'X-Custom-Header': 'foobar' }
});

//! login and register
export const _registerUser = async (userData: Iuser) => api.post('/register', userData);

export const _login = async ({ user, password }: loginType) =>
  api.post('/login', { user, password });

//? verification
export const _createVerificationData = async (data: VerificationData) =>
  api.post('/create_verification_data', data);

export const _updateVerificationData = async (data: VerificationData) =>
  api.put('/create_verification_data', data);

export const _verificationCode = async (code: otp) => api.post('/register', code);

//* update password
export const _setPassword = async (data: password) => api.post('/create_verification_data', data);

export const _updatePassword = async (data: password) => api.put('/create_verification_data', data);
