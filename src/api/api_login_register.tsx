import axios from 'axios';
import { Iuser, VerificationData, loginCreds, otp, password } from '../types/user';
const BASE_URL = 'http://13.48.58.81:8000/my_auth/api/';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-Custom-Header': 'foobar'
  }
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
});

//! login and register
// export const _registerUser = async (userData: Iuser) => api.post('registration/', userData);
export const _registerUser = async (userData: Iuser) => {
  try {
    const response = await api.post('registration/', userData);
    return response.data;
  } catch (error) {
    // Handle error here
    console.error('Error during user registration:', error);
    throw error;
  }
};

export const _login = async (userData: loginCreds) => {
  try {
    const response = await api.post('login/', userData);
    return response.data;
  } catch (error) {
    // Handle error here
    console.error('Error during login:', error);
    throw error;
  }
};

//? verification
// export const _verificationCode = async (data: otp) => api.post('verification/', data);
export const _verificatCode = async (data: otp) => {
  try {
    const response = await api.post('verification/', data);
    return response.data;
  } catch (error) {
    console.error('Error during verification:', error);
    throw error;
  }
};

export const _createVerificationData = async (data: VerificationData) => {
  try {
    const response = await api.post('verification/data/', data);
    return response.data;
  } catch (error) {
    // Handle error here
    console.error('Check your phone number or E-mail', error);
    throw error;
  }
};

//?? update password
// export const _setPassword = async (data: password) => api.post('password/', data);
export const _setPassword = async (data: password) => {
  try {
    const response = await api.post('password/', data);
    return response.data;
  } catch (error) {
    // Handle error here
    console.error('Error while setting password:', error);
    throw error;
  }
};

// export const _updatePassword = async (data: password) => api.put('password/', data);
export const _updatePassword = async (data: password) => {
  try {
    const response = await api.put('password/', data);
    return response.data;
  } catch (error) {
    // Handle error here
    console.error('Error while updating password:', error);
    throw error;
  }
};
