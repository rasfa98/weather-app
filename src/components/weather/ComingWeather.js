import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

import ComingWeatherDay from './ComingWeatherDay';
import LoadingSpinner from '../layout/LoadingSpinner';

import { getComingWeather } from '../../actions/weatherActions';

class ComingWeather extends Component {
  componentDidMount() {
    if (!this.props.comingWeather) {
      this.props.getComingWeather(
        {
          type: 'coordinates',
          data: this.props.position
        },
        this.props.settings.apiKey,
        this.props.settings.temperatureUnit
      );
    } else {
      this.props.getComingWeather(
        {
          type: 'city',
          data: this.props.currentWeather.name
        },
        this.props.settings.apiKey,
        this.props.settings.temperatureUnit
      );
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.position !== prevProps.position) {
      this.props.getComingWeather(
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
