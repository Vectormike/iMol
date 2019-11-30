import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  LOADED_FAIL
} from './types';
import { showAlert } from './alert';
import setAuthToken from '../../helpers/helpers';

// Get user details
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  const options = {
    method: 'get',
    url: 'http://localhost:7000/api/auth/'
  };

  try {
    const response = await axios(options);
    dispatch({ type: USER_LOADED, payload: response.data });
  } catch (error) {
    dispatch({ type: LOADED_FAIL });
  }
};

// Register user
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

// Loginn user
export const login = ({ email, password }) => async dispatch => {
  let Email = email.toString();
  let Password = password.toString();

  const options = {
    method: 'post',
    url: 'http://localhost:7000/api/auth/login',
    data: {
      email: Email,
      password: Password
    }
  };
  try {
    const response = await axios(options);
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    dispatch(showAlert(response.data.message, 'success', 5000));
  } catch (error) {
    dispatch(showAlert(error.response.data.message, 'error', 5000));
  }
  dispatch({ type: LOGIN_FAIL });
};
