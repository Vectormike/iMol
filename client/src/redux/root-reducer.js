import { combineReducers } from 'redux';
import { alertReducer } from './reducers/alert';
import { authReducer } from './reducers/auth';
import { productsReducer } from './reducers/product';

// Reducers
const rootReducer = combineReducers({
  alert: alertReducer,
  auth: authReducer,
  product: productsReducer
});

export default rootReducer;
