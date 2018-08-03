import { GET_CURRENT_WEATHER } from './types';
import axios from 'axios';

export const getCurrentWeather = () => async dispatch => {
  const res = await axios.get(
    'https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/18.04593/lat/59.32905/data.json'
  );

  const currentWeather = res.data.timeSeries[0];

  dispatch({
    type: GET_CURRENT_WEATHER,
    payload: currentWeather
  });
};
