import { SHOW_ALERT, REMOVE_ALERT } from '../actions/types';
const initialState = [];

export const alertReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SHOW_ALERT:
      return [...state, payload];
    default:
      return state;
  }
};
