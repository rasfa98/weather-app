import {
  SEARCH_ERROR,
  API_KEY_ERROR,
  NETWORK_ERROR,
  SERVER_ERROR
} from '../actions/types';

const initialState = {
  searchError: false,
  apiKeyError: false,
  networkError: false,
  serverError: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_ERROR:
      return {
        ...state,
        searchError: action.payload
      };
    case API_KEY_ERROR:
      return {
        ...state,
        apiKeyError: action.payload
      };
    case NETWORK_ERROR:
      return {
        ...state,
        networkError: action.payload
      };
    case SERVER_ERROR:
      return {
        ...state,
        serverError: action.payload
      };
    default:
      return state;
  }
}
