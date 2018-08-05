import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        <div className="row">
          {comingWeather.map(x => (
            <div className="col">
              <ComingWeatherDay key={x.dt} day={x} />
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
