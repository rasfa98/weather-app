import { GET_CURRENT_WEATHER, GET_COMING_WEATHER } from '../actions/types';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CURRENT_WEATHER:
      return {
        ...state,
        currentWeather: action.payload
      };
    case GET_COMING_WEATHER:
      return {
        ...state,
        comingWeather: action.payload
      };
    default:
      return state;
  }
}
