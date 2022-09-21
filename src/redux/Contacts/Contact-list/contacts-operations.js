import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import * as contactsApi from './contacts-api';

export const fetchContacts = createAsyncThunk(
  'contacts/items/fetchContacts',
  async () => {
    const contacts = await contactsApi.fetchContacts();
    return contacts;
  }
);

const isDuplicated = ({ name }, contacts) => {
  const toNormalizedName = name.toLowerCase();
  const result = contacts.find(
    item => item.name.toLowerCase() === toNormalizedName
  );
  return Boolean(result);
};

export const addContact = createAsyncThunk(
  'contacts/items/addContact',
  async (data, { rejectedWithValue }) => {
    try {
      const result = await contactsApi.addContact(data);
      return result;
    } catch (error) {
      return rejectedWithValue(error);
    }
  },
  {
    condition: (data, { getState }) => {
      const { contacts } = getState();
      if (isDuplicated(data, contacts.items)) {
        toast.error('This contact is allready exist', {
          position: 'top-center',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return false;
      }
    },
  }
);

export const removeContact = createAsyncThunk(
  'contacts/items/removeContact',
  async (id, { rejectWithValue }) => {
    try {
      await contactsApi.removeContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// export const editContact = createAsyncThunk(
//   'contacts/items/editContact',
//   async (id, rejectWithValue) => {
//     try {
//       const result = await contactsApi.editContact(id);
//       return result;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// export const fetchContacts1 = () => async dispatch => {
//   dispatch(contactsActions.fetchContactsRequest);
//   try {
//     const contacts = await contactsApi.fetchContacts();
//     dispatch(contactsActions.fetchContactsSuccess(contacts));
//   } catch (error) {
//     dispatch(contactsActions.fetchContactsError(error.message));
//   }
// };

// export const addContact = data => async dispatch => {
//   dispatch(contactsActions.addContactRequest);
//   try {
//     const contact = await contactsApi.addContact(data);
//     dispatch(contactsActions.addContactSuccess(contact));
//   } catch (error) {
//     dispatch(contactsActions.addContactError(error.message));
//   }
// };

// export const removeContact = id => async dispatch => {
//   dispatch(contactsActions.removeContactRequest);
//   try {
//     const result = await contactsApi.removeContact(id);
//     dispatch(contactsActions.removeContactSuccess(id));
//     return result;
//   } catch (error) {
//     console.log(error.msg);
//   }
// };
