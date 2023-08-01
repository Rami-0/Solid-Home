import axios from 'axios';
import { Iuser, VerificationData, loginCreds, otp, password } from '../types/user';
const BASE_URL = 'http://13.48.58.81:8000/';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' }
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
});

//! login and register
export const _registerUser = async (userData: Iuser) => {
  try {
    const response = await api.post('registration/api/', userData);
    return response.data;
  } catch (error) {
    console.error('Error during user registration:', error);
    throw error;
  }
};

export const _login = async (userData: loginCreds) => {
  try {
    const response = await api.post('users/api/token/login/', userData);
    return response.data;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};

export const _loginWithToken = async (refresh: string) => {
  try {
    const response = await axiosPrivate.post('users/api/token/refresh/', {
      refresh: refresh
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const _getUserData = async (accessToken: string) => {
  try {
    const response = await api.get('users/api/user', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error getting the Data:', error);
    throw error;
  }
};

//? verification
export const _verificatCode = async (data: otp) => {
  try {
    const response = await api.post('registration/api/verification/', data);
    return response.data;
  } catch (error) {
    console.error('Error during verification:', error);
    throw error;
  }
};

export const _createVerificationData = async (data: VerificationData) => {
  try {
    const response = await api.post('registration/api/verification/data/', data);
    return response;
  } catch (error) {
    console.error('Check your phone number or E-mail', error);
    throw error;
  }
};

//?? update password
export const _setPassword = async (data: password) => {
  try {
    const response = await api.post('registration/api/password/', data);
    return response.data;
  } catch (error) {
    console.error('Error while setting password:', error);
    throw error;
  }
};

export const _updatePassword = async (data: password) => {
  try {
    const response = await api.put('registration/api/password/', data);
    return response.data;
  } catch (error) {
    console.error('Error while updating password:', error);
    throw error;
  }
};
