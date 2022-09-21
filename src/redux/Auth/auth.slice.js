import { createSlice } from '@reduxjs/toolkit';

import { signup, logIn, logOut, getCurrentUser } from './auth-operations';

const initialState = {
  user: {},
  isLogin: false,
  token: '',
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signup.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [signup.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload.user;
      store.isLogin = true;
      store.token = payload.token;
    },
    [signup.rejected]: (store, { payload }) => {
      store.loading = false;
      store.erorr = payload;
    },
    [logIn.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [logIn.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.isLogin = true;
      store.user = payload.user;
      store.token = payload.token;
    },
    [logIn.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [logOut.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [logOut.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.isLogin = false;
      store.token = '';
      store.user = {};
    },
    [logOut.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [getCurrentUser.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.isLogin = true;
      store.user = payload;
      console.log(payload);
    },
    [getCurrentUser.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [getCurrentUser.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [getCurrentUser.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default authSlice.reducer;
