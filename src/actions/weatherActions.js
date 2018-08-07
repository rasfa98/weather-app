import { GET_CURRENT_WEATHER, GET_COMING_WEATHER } from './types';
import axios from 'axios';
import moment from 'moment';

export const getCurrentWeather = query => async dispatch => {
  if (query.type === 'coordinates') {
    const { lon, lat } = query.data;

    const res = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=${
        process.env.REACT_APP_WEATHER_API_KEY
      }`
    );

    dispatch({
      type: GET_CURRENT_WEATHER,
      payload: res.data
    });
  } else {
    const res = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${
        query.data
      }&units=metric&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`
    );

    dispatch({
      type: GET_CURRENT_WEATHER,
      payload: res.data
    });
  }
};

export const getComingWeather = query => async dispatch => {
  if (query.type === 'coordinates') {
    const { lon, lat } = query.data;

    const res = await axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&APPID=${
        process.env.REACT_APP_WEATHER_API_KEY
      }`
    );

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
    const res = await axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?q=${
        query.data
      }&units=metric&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`
    );

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
