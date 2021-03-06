import { GET_USER_POSITION } from '../actions/types';

const initialState = {
  position: { lon: '18.06324', lat: '59.334591' },
  hasFetchedPosition: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER_POSITION:
      return {
        ...state,
        position: action.payload,
        hasFetchedPosition: true
      };
    default:
      return state;
  }
}
