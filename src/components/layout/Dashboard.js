import React, { Component } from 'react';
import { connect } from 'react-redux';

import CurrentWeather from '../weather/CurrentWeather';
import ComingWeather from '../weather/ComingWeather';
import SearchBar from '../layout/SearchBar';
import UnknownCity from './UnknownCity';

import { getUserPosition } from '../../actions/userActions';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getUserPosition();
  }

  render() {
    return (
      <div>
        <SearchBar />
        {!this.props.searchError ? (
          <div>
            <CurrentWeather />
            <ComingWeather />
          </div>
        ) : (
          <UnknownCity />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  position: state.user.position,
  searchError: state.errors.searchError
});

export default connect(
  mapStateToProps,
  { getUserPosition }
)(Dashboard);
