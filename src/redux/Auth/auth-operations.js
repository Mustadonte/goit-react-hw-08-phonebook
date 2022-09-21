import { createAsyncThunk } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';
import * as api from './auth-api';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.signup(data);

      return result;
    } catch (error) {
      toast.error(`${error.message}`);
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const result = await api.login(credentials);
      console.log(result);
      return result;
    } catch (error) {
      toast.error(`${error.message}`);
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.logout();
      return result;
    } catch (error) {
      toast.error(`${error.message}`);
      return rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/current',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();

      const { data: result } = await api.getCurrentUser(auth.token);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
