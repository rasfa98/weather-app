import React from 'react';
import moment from 'moment';

import { weatherIcon } from '../../helpers/weather';

const ComingWeatherDay = props => {
  const { temp, temp_min, temp_max } = props.day.main;
  const { description, icon } = props.day.weather[0];
  const { dt } = props.day;

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="text-center font-weight-bold">
          {moment.unix(dt).format('dddd')}
        </h2>

        <img
          src={`/images/${weatherIcon(icon)}.svg`}
          alt="Weather icon"
          style={{
            width: '140px',
            display: 'block',
            margin: '0 auto'
          }}
        />

        <h2 className="text-center text-primary mt-4">
          {temp.toFixed(0)}&deg;
        </h2>

        <h3 className="text-center text-capitalize">{description}</h3>

        <p className="text-center text-secondary">
          L: {temp_min}&deg; H: {temp_max}&deg;
        </p>
      </div>
    </div>
  );
};

export default ComingWeatherDay;
