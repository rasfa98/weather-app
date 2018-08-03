import { GET_USER_POSITION } from './types';

export const getUserPosition = () => dispatch => {
  navigator.geolocation.getCurrentPosition(pos => {
    const lon = pos.coords.longitude.toFixed(5);
    const lat = pos.coords.latitude.toFixed(5);

    dispatch({
      type: GET_USER_POSITION,
      payload: { lon, lat }
    });
  });
};
