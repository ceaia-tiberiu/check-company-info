import { combineReducers } from 'redux';
import companiesReducer from './userReducer';

export default combineReducers({
  companies: companiesReducer,
});
