import { CHANGE_API_KEY, CHANGE_TEMPERATURE_UNIT } from '../actions/types';

const initialState = {
  temperatureUnit: 'celsius',
  apiKey: ''
};

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
