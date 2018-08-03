import React, { Component } from 'react';
import { connect } from 'react-redux';

import CurrentWeather from '../weather/CurrentWeather';

import { getUserPosition } from '../../actions/userActions';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getUserPosition();
  }

  render() {
    return <CurrentWeather />;
  }
}

const mapStateToProps = state => ({
  position: state.user.position
});

export default connect(
  mapStateToProps,
  { getUserPosition }
)(Dashboard);
