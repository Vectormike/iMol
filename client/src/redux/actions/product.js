import axios from 'axios';

import { showAlert } from './alert';

import { GET_PRODUCTS, PRODUCT_ERROR } from './types';

// Get products
export const getProducts = () => async dispatch => {
  console.log('Hi');

  const options = {
    method: 'get',
    url: 'http://localhost:7000/api/products'
  };

  try {
    const res = await axios.get(options);

    dispatch({
      type: GET_PRODUCTS,
      payload: res.data
    });
  } catch (error) {
    dispatch(showAlert('error', 'error', 5000));
    dispatch({
      type: PRODUCT_ERROR
    });
  }
};
