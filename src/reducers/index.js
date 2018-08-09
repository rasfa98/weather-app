import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import userReducer from './userReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  weather: weatherReducer,
  user: userReducer,
  errors: errorReducer
});
