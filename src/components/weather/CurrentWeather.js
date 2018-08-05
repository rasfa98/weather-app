import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCurrentWeather } from '../../actions/weatherActions';

import { weatherIcon } from '../../helpers/weather';

class CurrentWeather extends Component {
  componentDidMount() {
    this.props.getCurrentWeather(this.props.position);
  }

  componentDidUpdate(prevProps) {
    if (this.props.position !== prevProps.position) {
      this.props.getCurrentWeather(this.props.position);
    }
  }

  render() {
    const { currentWeather } = this.props;

    if (currentWeather) {
      return (
        <div className="card">
          <div className="card-header">
            <h3 className="text-center text-capitalize">
              {currentWeather.name}
            </h3>
          </div>
          <div className="card-body pt-0">
            <img
              src={`/images/${weatherIcon(currentWeather.weather[0].icon)}.svg`}
              alt="Weather icon"
              style={{
                width: '170px',
                height: '170px',
                display: 'block',
                margin: '0 auto'
              }}
            />

            <h1 className="text-center">
              {currentWeather.main.temp.toFixed(0)}&deg;
            </h1>

            <h2 className="text-center text-capitalize">
              {currentWeather.weather[0].description}
            </h2>

            <p className="text-center">
              Wind {currentWeather.wind.speed} m/s - Humidity -{' '}
              {currentWeather.main.humidity} % Pressure -{' '}
              {currentWeather.main.pressure} hPa - Cloudiness{' '}
              {currentWeather.clouds.all} %
            </p>
          </div>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

const mapStateToProps = state => ({
  currentWeather: state.weather.currentWeather,
  position: state.user.position
});

export default connect(
  mapStateToProps,
  { getCurrentWeather }
)(CurrentWeather);
