import moment from 'moment';
import axios from 'axios';

import {
  GET_CURRENT_WEATHER,
  GET_COMING_WEATHER,
  SEARCH_ERROR,
  API_KEY_ERROR,
  NETWORK_ERROR,
  SERVER_ERROR
} from './types';

export const getCurrentWeather = (
  query,
  apiKey,
  temperatureUnit
) => async dispatch => {
  const res = await getWeatherData(
    query,
    'http://api.openweathermap.org/data/2.5/weather?',
    apiKey,
    temperatureUnit
  );

  if (res.type === 'success') {
    dispatch({
      type: GET_CURRENT_WEATHER,
      payload: res.data
    });
  } else {
    dispatch({
      type: res,
      payload: true
    });
  }
};

export const getComingWeather = (
  query,
  apiKey,
  temperatureUnit
) => async dispatch => {
  const res = await getWeatherData(
    query,
    'http://api.openweathermap.org/data/2.5/forecast?',
    apiKey,
    temperatureUnit
  );

  // Filter out weather information at 12PM UTC for coming days.
  if (res.type === 'success') {
    dispatch({
      type: GET_COMING_WEATHER,
      payload: res.data.list
        .filter(
          x =>
            moment
              .unix(x.dt)
              .utc()
              .format('HH') === '12'
        )
        .slice(1)
    });
  } else {
    dispatch({
      type: res,
      payload: true
    });
  }
};

const getWeatherData = async (query, url, apiKey, temperatureUnit) => {
  let parameters;
  let unit = temperatureUnit === 'celsius' ? 'metric' : 'imperial';

  try {
    if (query.type === 'coordinates') {
      const { lon, lat } = query.data;

      parameters = `lat=${lat}&lon=${lon}&units=${unit}&APPID=${apiKey}`;
    } else {
      parameters = `q=${query.data}&units=${unit}&APPID=${apiKey}`;
    }

    const res = await axios.get(url + parameters);

    return { type: 'success', data: res.data };
  } catch (err) {
    return handleError(err);
  }
};

const handleError = err => {
  if (err.response) {
    if (err.response.status === 401) {
      return API_KEY_ERROR;
    } else if (err.response.status === 404) {
      return SEARCH_ERROR;
    } else if (err.response.status > 500) {
      return SERVER_ERROR;
    }
  } else {
    return NETWORK_ERROR;
  }
};
