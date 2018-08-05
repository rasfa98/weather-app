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
        <div>
          <h1>Current Weather</h1>

          <hr />

          <div className="row mb-4">
            <div className="col-md-4">
              <div className="card border border-primary">
                <div className="card-body">
                  <h1 className="text-capitalize font-weight-bold">
                    {currentWeather.name}
                  </h1>

                  <h2 className="text-capitalize text-secondary">
                    {currentWeather.weather[0].description}
                  </h2>

                  <h1 className="text-primary">
                    {currentWeather.main.temp.toFixed(0)}&deg;
                  </h1>

                  <img
                    src={`/images/${weatherIcon(
                      currentWeather.weather[0].icon
                    )}.svg`}
                    alt="Weather icon"
                    style={{
                      width: '150px',
                      display: 'block'
                    }}
                    className="ml-auto"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border border-primary">
                <div className="card-body">
                  <h2 className="text-center font-weight-bold">Wind</h2>
                  <h3 className="text-center">
                    {currentWeather.wind.speed} m/s
                  </h3>
                </div>
              </div>

              <div className="card border border-primary mt-4">
                <div className="card-body">
                  <h2 className="text-center font-weight-bold">Pressure</h2>
                  <h3 className="text-center">
                    {currentWeather.main.pressure} hPa
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border border-primary">
                <div className="card-body">
                  <h2 className="text-center font-weight-bold">Humidity</h2>
                  <h3 className="text-center">
                    {currentWeather.main.humidity} %
                  </h3>
                </div>
              </div>

              <div className="card border border-primary mt-4">
                <div className="card-body">
                  <h2 className="text-center font-weight-bold">Cloudiness</h2>
                  <h3 className="text-center">{currentWeather.clouds.all} %</h3>
                </div>
              </div>
            </div>
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
