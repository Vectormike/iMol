import { combineReducers } from 'redux';
import { alertReducer } from './reducers/alert';

// Reducers
const rootReducer = combineReducers({ alert: alertReducer });

export default rootReducer;
