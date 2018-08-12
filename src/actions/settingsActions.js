import { CHANGE_API_KEY, CHANGE_TEMPERATURE_UNIT } from './types';

export const changeApiKey = apiKey => dispatch => {
  dispatch({
    type: CHANGE_API_KEY,
    payload: apiKey
  });
};

export const changeTemperatureUnit = temperatureUnit => dispatch => {
  dispatch({
    type: CHANGE_TEMPERATURE_UNIT,
    payload: temperatureUnit
  });
};
