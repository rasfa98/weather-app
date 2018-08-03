import { GET_CURRENT_WEATHER } from './types';
import axios from 'axios';

export const getCurrentWeather = coordinates => async dispatch => {
  const { lon, lat } = coordinates;

  const res = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=${
      process.env.REACT_APP_WEATHER_API_KEY
    }`
  );

  dispatch({
    type: GET_CURRENT_WEATHER,
    payload: res.data
  });
};
