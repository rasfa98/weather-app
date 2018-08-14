import { CHANGE_API_KEY, CHANGE_TEMPERATURE_UNIT } from '../actions/types';

if (localStorage.getItem('settings') === null) {
  const defaultSettings = {
    temperatureUnit: 'celsius',
    apiKey: ''
  };

  localStorage.setItem('settings', JSON.stringify(defaultSettings));
}

const initialState = JSON.parse(localStorage.getItem('settings'));

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TEMPERATURE_UNIT:
      return {
        ...state,
        temperatureUnit: action.payload
      };
    case CHANGE_API_KEY:
      return {
        ...state,
        apiKey: action.payload
      };

    default:
      return state;
  }
}
