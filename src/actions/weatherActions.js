import axios from 'axios';
import moment from 'moment';

import { GET_CURRENT_WEATHER, GET_COMING_WEATHER, SEARCH_ERROR } from './types';

import { getWeatherData } from '../helpers/weather';

export const getCurrentWeather = query => async dispatch => {
  const res = await getWeatherData(
    query,
    'http://api.openweathermap.org/data/2.5/weather?'
  );

  if (res.type === 'error') {
    dispatch({
      type: SEARCH_ERROR
    });
  } else if (res.type === 'success') {
    dispatch({
      type: GET_CURRENT_WEATHER,
      payload: res.data
    });
  }
};

export const getComingWeather = query => async dispatch => {
  const res = await getWeatherData(
    query,
    'http://api.openweathermap.org/data/2.5/forecast?'
  );

  if (res.type === 'error') {
    dispatch({
      type: SEARCH_ERROR
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
