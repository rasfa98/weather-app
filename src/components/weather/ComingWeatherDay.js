import React from 'react';
import moment from 'moment';

import { weatherIcon } from '../../helpers/weather';

const ComingWeatherDay = props => {
  const { temp } = props.day.main;
  const { description, icon } = props.day.weather[0];
  const { dt } = props.day;

  return (
    <div className="card opacity h-100">
      <div className="card-body text-white">
        <h3 className="text-center">{moment.unix(dt).format('dddd')}</h3>

        <img
          src={`/images/${weatherIcon(icon)}.svg`}
          alt="Weather icon"
          className="weather-day-icon"
        />

        <h2 className="text-center mt-3">
          {temp.toFixed(0)}
          &deg;{' '}
        </h2>

        <h5 className="text-center text-capitalize">{description}</h5>
      </div>
    </div>
  );
};

export default ComingWeatherDay;
