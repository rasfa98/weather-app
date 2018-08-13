import { SEARCH_ERROR, API_KEY_ERROR } from '../actions/types';

const initialState = { searchError: false, apiKeyError: false };

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_ERROR:
      return {
        ...state,
        searchError: true
      };
    case API_KEY_ERROR:
      return {
        ...state,
        apiKeyError: true
      };
    default:
      return state;
  }
}
