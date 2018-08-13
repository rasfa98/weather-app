import moment from 'moment';
import axios from 'axios';

import {
  GET_CURRENT_WEATHER,
  GET_COMING_WEATHER,
  SEARCH_ERROR,
  API_KEY_ERROR
} from './types';

export const getCurrentWeather = (
  query,
  apiKey,
  temperatureUnit
) => async dispatch => {
  const res = await _getWeatherData(
    query,
    'http://api.openweathermap.org/data/2.5/weather?',
    apiKey,
    temperatureUnit
  );

  if (res.type === 'searchError') {
    dispatch({
      type: SEARCH_ERROR
    });
  } else if (res.type === 'apiKeyError') {
    dispatch({
      type: API_KEY_ERROR
    });
  } else if (res.type === 'success') {
    dispatch({
      type: GET_CURRENT_WEATHER,
      payload: res.data
    });
  }
};

export const getComingWeather = (
  query,
  apiKey,
  temperatureUnit
) => async dispatch => {
  const res = await _getWeatherData(
    query,
    'http://api.openweathermap.org/data/2.5/forecast?',
    apiKey,
    temperatureUnit
  );

  if (res.type === 'searchError') {
    dispatch({
      type: SEARCH_ERROR
    });
  } else if (res.type === 'apiKeyError') {
    dispatch({
      type: API_KEY_ERROR
    });
  } else if (res.type === 'success') {
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
  }
};

const _getWeatherData = async (query, url, apiKey, temperatureUnit) => {
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
    if (err.response.status === 401) {
      return { type: 'apiKeyError', data: null };
    } else if (err.response.status === 404) {
      return { type: 'searchError', data: null };
    }
  }
};
