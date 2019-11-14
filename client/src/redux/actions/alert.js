import { SHOW_ALERT, REMOVE_ALERT } from './types';
import uuid from 'uuid';

export const showAlert = (message, status, timeout) => dispatch => {
  const id = uuid.v4();
  dispatch({
    type: SHOW_ALERT,
    payload: { message, id, status }
  });

  setTimeout(
    () =>
      dispatch({
        type: REMOVE_ALERT,
        payload: id
      }),
    timeout
  );
};
