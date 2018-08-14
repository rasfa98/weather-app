import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

import ComingWeatherDay from './ComingWeatherDay';
import LoadingSpinner from '../layout/LoadingSpinner';

import { getComingWeather } from '../../actions/weatherActions';

class ComingWeather extends Component {
  componentDidMount() {
    const { comingWeather, currentWeather } = this.props;
    const { position } = this.props;
    const { apiKey, temperatureUnit } = this.props.settings;

    if (!comingWeather) {
      this.props.getComingWeather(
        {
          type: 'coordinates',
          data: position
        },
        apiKey,
        temperatureUnit
      );
    } else {
      this.props.getComingWeather(
        {
          type: 'city',
          data: currentWeather.name
        },
        apiKey,
        temperatureUnit
      );
    }
  }

  componentDidUpdate(prevProps) {
    const { position } = this.props;
    const { apiKey, temperatureUnit } = this.props.settings;

    if (position !== prevProps.position) {
      this.props.getComingWeather(
        {
          type: 'coordinates',
          data: position
        },
        apiKey,
        temperatureUnit
      );
    }
  }

  render() {
    const { comingWeather } = this.props;

    if (comingWeather) {
      return (
        <div className="row">
          {comingWeather.map(x => (
            <div key={uuid()} className="col mb-4">
              <ComingWeatherDay day={x} />
            </div>
          ))}
        </div>
      );
    } else {
      return <LoadingSpinner />;
    }
  }
}

const mapStateToProps = state => ({
  comingWeather: state.weather.comingWeather,
  currentWeather: state.weather.currentWeather,
  position: state.user.position,
  settings: state.settings
});

export default connect(
  mapStateToProps,
  { getComingWeather }
)(ComingWeather);
