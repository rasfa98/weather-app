import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import LoadingSpinner from '../layout/LoadingSpinner';

import { getCurrentWeather } from '../../actions/weatherActions';

import { weatherIcon } from '../../helpers/weather';

class CurrentWeather extends Component {
  componentDidMount() {
    if (!this.props.currentWeather) {
      this.props.getCurrentWeather(
        {
          type: 'coordinates',
          data: this.props.position
        },
        this.props.settings.apiKey,
        this.props.settings.temperatureUnit
      );
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.position !== prevProps.position) {
      this.props.getCurrentWeather(
        {
          type: 'coordinates',
          data: this.props.position
        },
        this.props.settings.apiKey,
        this.props.settings.temperatureUnit
      );
    }
  }

  render() {
    const { currentWeather } = this.props;

    if (currentWeather) {
      return (
        <div className="card mb-4 opacity">
          <div className="card-body">
            <h1 className="text-center text-white text-capitalize">
              {currentWeather.name}
            </h1>

            <h2 className="text-white text-center" style={{ fontSize: '60px' }}>
              {currentWeather.main.temp.toFixed(0)}
              &deg;
            </h2>

            <img
              src={`/images/${weatherIcon(currentWeather.weather[0].icon)}.svg`}
              alt="Weather icon"
              className="m-auto"
              id="current-weather-icon"
            />

            <h1 className="text-white text-center text-capitalize mt-3">
              {currentWeather.weather[0].description}
            </h1>

            <h5 className="text-white text-center m-3">
              {moment.unix(currentWeather.dt).format('dddd HH:mm')}
            </h5>

            <p className="text-white text-center">
              <span className="p-3">Wind {currentWeather.wind.speed} m/s</span>
              <span className="p-3">
                Pressure {currentWeather.main.pressure} hPa
              </span>
              <br />
              <span className="p-3">
                Humidity {currentWeather.main.humidity} %
              </span>
              <span className="p-3">
                Cloudiness {currentWeather.clouds.all} %
              </span>
            </p>
          </div>
        </div>
      );
    } else {
      return <LoadingSpinner />;
    }
  }
}

const mapStateToProps = state => ({
  currentWeather: state.weather.currentWeather,
  position: state.user.position,
  settings: state.settings
});

export default connect(
  mapStateToProps,
  { getCurrentWeather }
)(CurrentWeather);
