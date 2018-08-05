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
          width: '170px',
          height: '170px',
          display: 'block',
          margin: '0 auto'
        }}
      />
    </div>
  );
};

export default ComingWeatherDay;
