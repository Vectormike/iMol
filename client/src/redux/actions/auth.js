import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAIL } from './types';
import { showAlert } from './alert';

export const register = ({ name, email, password }) => async dispatch => {
  let Name = name.toString();
  let Email = email.toString();
  let Password = password.toString();
  const options = {
    method: 'post',
    url: 'http://localhost:7000/api/auth/register',
    data: {
      name: Name,
      email: Email,
      password: Password
    }
  };
  try {
    const response = await axios(options);

    dispatch({ type: REGISTER_SUCCESS, payload: response.data });
    dispatch(showAlert(response.data.message, 'success', 5000));
  } catch (error) {
    dispatch(showAlert(error.response.data.message, 'error', 5000));
  }
  dispatch({ type: REGISTER_FAIL });
};
