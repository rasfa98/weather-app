import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import userReducer from './userReducer';
import errorReducer from './errorReducer';
import settingsReducer from './settingsReducer';

export default combineReducers({
  weather: weatherReducer,
  user: userReducer,
  errors: errorReducer,
  settings: settingsReducer
});
