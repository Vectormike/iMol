import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  USER_LOADED,
  LOADED_FAIL,
  LOGIN_FAIL
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  user: null,
  isAuthenticated: null
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true
      };
    case REGISTER_FAIL:
    case LOADED_FAIL:
    case LOGIN_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: null
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        user: payload
      };
    default:
      return state;
  }
};
