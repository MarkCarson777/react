import { combineReducers } from 'redux';
import authReducer from './authReducer';
// allows as to rename the in-built reducer function as something more descriptive
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  auth: authReducer,
  form: formReducer
});