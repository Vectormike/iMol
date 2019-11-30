import axios from 'axios';

export const removeAlert = (state, payload) => {
  return state.filter(alert => alert.id !== payload);
};

export const setAuthToken = token => {
  if (!token) {
    delete axios.defaults.headers.common['x-auth-token'];
  } else {
    axios.defaults.headers.common['x-auth-token'] = token;
  }
};
