import React from 'react';
import moment from 'moment';

import { weatherIcon } from '../../helpers/weather';

const ComingWeatherDay = props => {
  const { temp, temp_min, temp_max } = props.day.main;
  const { description, icon } = props.day.weather[0];
  const { dt } = props.day;

  return (
    <div
      className="card"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.2)'
      }}
    >
      <div className="card-body">
        <h3 className="text-center text-white">
          {moment.unix(dt).format('dddd')}
        </h3>

        <img
          src={`/images/${weatherIcon(icon)}.svg`}
          alt="Weather icon"
          style={{
            width: '100px',
            display: 'block',
            margin: '0 auto'
          }}
        />

        <h2 className="text-center text-white mt-3">
          <span className="small text-secondary">
            {temp_min.toFixed(0)}&deg;
          </span>{' '}
          {temp.toFixed(0)}&deg;{' '}
          <span className="small text-secondary">
            {temp_max.toFixed(0)}&deg;
          </span>
        </h2>

        <h5 className="text-center text-white text-capitalize">
          {description}
        </h5>

        <p className="text-center text-white">
          {moment.unix(dt).format('HH:mm')}
        </p>
      </div>
    </div>
  );
};

export default ComingWeatherDay;
