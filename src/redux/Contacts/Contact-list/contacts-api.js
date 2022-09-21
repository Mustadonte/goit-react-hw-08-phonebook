import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContact(data) {
  const result = await axios.post('/contacts', data);
  return result.data;
}

export async function removeContact(id) {
  const result = await axios.delete(`/contacts/${id}`);
  return result;
}

// export const editContact = async id => {
//   const result = await axios.patch(`/contacts/${id}`);
//   return result.data;
// };

// export const getContactById = async id => {
//   const result = await axios(`contacts/${id}`);
//   return result;
// };
