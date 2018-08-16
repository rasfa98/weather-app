import { CHANGE_API_KEY, CHANGE_TEMPERATURE_UNIT } from './types';

export const changeApiKey = apiKey => dispatch => {
  // Save settings to local storage.
  const settings = JSON.parse(localStorage.getItem('settings'));

  settings.apiKey = apiKey;

  localStorage.setItem('settings', JSON.stringify(settings));

  dispatch({
    type: CHANGE_API_KEY,
    payload: settings.apiKey
  });
};

export const changeTemperatureUnit = temperatureUnit => dispatch => {
  // Save settings to local storage.
  const settings = JSON.parse(localStorage.getItem('settings'));

  settings.temperatureUnit = temperatureUnit;

  localStorage.setItem('settings', JSON.stringify(settings));

  dispatch({
    type: CHANGE_TEMPERATURE_UNIT,
    payload: settings.temperatureUnit
  });
};
