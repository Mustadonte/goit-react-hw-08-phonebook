import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const authToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signup = async data => {
  const { data: result } = await axios.post('/users/signup', data);
  authToken.set(result.token);
  return result;
};

export const login = async data => {
  const { data: result } = await axios.post('users/login', data);
  authToken.set(result.token);
  return result;
};

export const logout = async () => {
  const result = await axios.post('users/logout');
  authToken.unset();
  return result;
};

export const getCurrentUser = async token => {
  try {
    authToken.set(token);
    const result = await axios.get('users/current', token);
    return result;
  } catch (error) {
    authToken.unset();
    throw error;
  }
};
