import { SHOW_ALERT, REMOVE_ALERT } from '../actions/types';
import { removeAlert } from '../../helpers/helpers';
const initialState = [];

export const alertReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SHOW_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return removeAlert(state, payload);
    default:
      return state;
  }
};
