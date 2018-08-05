import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

import ComingWeatherDay from './ComingWeatherDay';

import { getComingWeather } from '../../actions/weatherActions';

import { weatherIcon } from '../../helpers/weather';

class ComingWeather extends Component {
  componentDidMount() {
    this.props.getComingWeather(this.props.position);
  }

  // TODO: Update data when user position is given.

  render() {
    const { comingWeather } = this.props;

    if (comingWeather) {
      return (
        <div>
          <h1>Coming Weather</h1>

          <hr />

          <div className="row mb-4">
            {comingWeather.map(x => (
              <div key={uuid()} className="col">
                <ComingWeatherDay day={x} />
              </div>
            ))}
          </div>
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
