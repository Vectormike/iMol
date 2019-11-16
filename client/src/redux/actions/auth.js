import axios from 'axios';
import { REGISTER_SUCCESS } from './types';
import { showAlert } from './alert';
console.log('Hi');

export const register = (name, email, password) => async dispatch => {
  console.log('Hi');

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ name, email, password });

  try {
    console.log('Hi');

    const response = await axios.post('api/auth/register', body, config);
    console.log('Hi');

    dispatch({ type: REGISTER_SUCCESS, payload: response.message });
  } catch (error) {
    const errors = error.response.data.errors;
  }
};
