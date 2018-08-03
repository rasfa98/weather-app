import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCurrentWeather } from '../../actions/weatherActions';

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
        <div className="text-white bg-danger">
          <h3 className="text-center text-capitalize">{currentWeather.name}</h3>
          <h1 className="text-center">
            <img
              src={`http://openweathermap.org/img/w/${
                currentWeather.weather[0].icon
              }.png`}
              alt="Weather icon"
            />
            {currentWeather.main.temp.toFixed(0)}&deg;
          </h1>

          <h2 className="text-center text-capitalize">
            {currentWeather.weather[0].description}
          </h2>

          <p className="text-center">
            Wind {currentWeather.wind.speed} m/s Humidity{' '}
            {currentWeather.main.humidity} % Pressure{' '}
            {currentWeather.main.pressure} hPa Cloudiness{' '}
            {currentWeather.clouds.all} %
          </p>
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
