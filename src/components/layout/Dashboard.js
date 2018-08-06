import React, { Component } from 'react';
import { connect } from 'react-redux';

import CurrentWeather from '../weather/CurrentWeather';
import ComingWeather from '../weather/ComingWeather';

import { getUserPosition } from '../../actions/userActions';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getUserPosition();
  }

  render() {
    return (
      <div>
        <div className="container">
          <CurrentWeather />
          <ComingWeather />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  position: state.user.position
});

export default connect(
  mapStateToProps,
  { getUserPosition }
)(Dashboard);
