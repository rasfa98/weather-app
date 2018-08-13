import { SEARCH_ERROR, API_KEY_ERROR } from '../actions/types';

export const changeApiKeyError = isError => dispatch => {
  dispatch({
    type: API_KEY_ERROR,
    payload: isError
  });
};

export const changeSearchError = isError => dispatch => {
  dispatch({
    type: SEARCH_ERROR,
    payload: isError
  });
};
