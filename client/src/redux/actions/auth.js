import axios from 'axios';
import { REGISTER_SUCCESS } from './types';
import { showAlert } from './alert';

export const register = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const response = axios.post('', config, body);

    dispatch({ type: REGISTER_SUCCESS, payload: response.data });
  } catch (error) {
    const errors = error.response.data.errors;
  }
};
