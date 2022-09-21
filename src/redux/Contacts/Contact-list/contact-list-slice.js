import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  removeContact,
} from './contacts-operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.fulfilled]: (store, { payload }) => {
      store.isLoading = false;
      store.items = payload;
    },
    [fetchContacts.pending]: store => {
      store.isLoading = true;
      store.error = null;
    },
    [fetchContacts.rejected]: (store, { payload }) => {
      store.isLoading = false;
      store.error = payload;
    },

    [addContact.fulfilled]: (store, { payload }) => {
      store.items.push(payload);
      store.isLoading = false;
    },
    [addContact.pending]: store => {
      store.isLoading = true;
      store.error = null;
    },
    [addContact.rejected]: (store, { payload }) => {
      store.isLoading = false;
      store.error = payload;
    },
    [removeContact.fulfilled]: (store, { payload }) => {
      store.items = store.items.filter(item => item.id !== payload);
      store.isLoading = false;
    },
    [removeContact.pending]: store => {
      store.isLoading = true;
      store.error = null;
    },
    [removeContact.rejected]: (store, { payload }) => {
      store.isLoading = false;
      store.error = null;
    },
  },
});

export default contactsSlice.reducer;
