import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

import ComingWeatherDay from './ComingWeatherDay';

import { getComingWeather } from '../../actions/weatherActions';

import { weatherIcon } from '../../helpers/weather';

class ComingWeather extends Component {
  componentDidMount() {
    if (!this.props.comingWeather) {
      this.props.getComingWeather({
        type: 'coordinates',
        data: this.props.position
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.position !== prevProps.position) {
      this.props.getComingWeather({
        type: 'coordinates',
        data: this.props.position
      });
    }
  }

  render() {
    const { comingWeather } = this.props;

    if (comingWeather) {
      return (
        <div className="row mb-4">
          {comingWeather.map(x => (
            <div key={uuid()} className="col">
              <ComingWeatherDay day={x} />
            </div>
          ))}
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

const mapStateToProps = state => ({
  comingWeather: state.weather.comingWeather,
  position: state.user.position
});

export default connect(
  mapStateToProps,
  { getComingWeather }
)(ComingWeather);
