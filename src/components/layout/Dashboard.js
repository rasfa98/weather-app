import React, { Component } from 'react';
import { connect } from 'react-redux';

import CurrentWeather from '../weather/CurrentWeather';
import ComingWeather from '../weather/ComingWeather';
import SearchBar from '../layout/SearchBar';
import SearchError from '../errors/SearchError';
import ApiKeyError from '../errors/ApiKeyError';

import { getUserPosition } from '../../actions/userActions';

class Dashboard extends Component {
  componentDidMount() {
    if (!this.props.hasFetchedPosition) {
      this.props.getUserPosition();
    }
  }

  render() {
    return (
      <div>
        <SearchBar />
        {this.props.errors.searchError ? <SearchError /> : null}
        {this.props.errors.apiKeyError ? <ApiKeyError /> : null}
        {!this.props.errors.apiKeyError && !this.props.errors.searchError ? (
          <div>
            <CurrentWeather />
            <ComingWeather />
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasFetchedPosition: state.user.hasFetchedPosition,
  position: state.user.position,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getUserPosition }
)(Dashboard);
