import { SHOW_ALERT, REMOVE_ALERT } from './types';
import uuid from 'uuid';

export const showAlert = (message, status) => dispatch => {
  const id = uuid.v4();
  dispatch({
    type: SHOW_ALERT,
    payload: { message, id, status }
  });
};
