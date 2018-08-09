import { SEARCH_ERROR } from '../actions/types';

const initialState = { searchError: false };

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_ERROR:
      return {
        ...state,
        searchError: true
      };
    default:
      return state;
  }
}
