import React, { Component } from 'react';
import { connect } from 'react-redux';

import CurrentWeather from '../weather/CurrentWeather';
import ComingWeather from '../weather/ComingWeather';
import SearchBar from '../layout/SearchBar';
import SearchError from '../errors/SearchError';
import ApiKeyError from '../errors/ApiKeyError';
import NetworkError from '../errors/NetworkError';

import { getUserPosition } from '../../actions/userActions';

import {
  changeApiKeyError,
  changeSearchError,
  changeNetworkError
} from '../../actions/errorActions';

class Dashboard extends Component {
  componentDidMount() {
    this.props.changeApiKeyError(false);
    this.props.changeSearchError(false);
    this.props.changeNetworkError(false);

    // Only fetch a users position once.
    if (!this.props.hasFetchedPosition) {
      this.props.getUserPosition();
    }
  }

  render() {
    const { searchError, apiKeyError, networkError } = this.props.errors;

    return (
      <div>
        <SearchBar />
        {searchError ? <SearchError /> : null}
        {apiKeyError ? <ApiKeyError /> : null}
        {networkError ? <NetworkError /> : null}

        {!apiKeyError && !searchError && !networkError ? (
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
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getUserPosition, changeApiKeyError, changeSearchError, changeNetworkError }
)(Dashboard);
