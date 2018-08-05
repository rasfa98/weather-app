import React from 'react';

import { weatherIcon } from '../../helpers/weather';

const ComingWeatherDay = props => {
  const { temp, temp_min, temp_max } = props.day.main;
  const { description, icon } = props.day.weather[0];

  return (
    <div className="card">
      <img
        src={`/images/${weatherIcon(icon)}.svg`}
        alt="Weather icon"
        style={{
          width: '140px',
          height: '140px',
          display: 'block',
          margin: '0 auto'
        }}
      />

      <h1 className="text-center">{temp.toFixed(0)}&deg;</h1>

      <h2 className="text-center text-capitalize">{description}</h2>

      <p className="text-center text-secondary">
        L {temp_min}&deg; H {temp_max}&deg;
      </p>
    </div>
  );
};

export default ComingWeatherDay;
