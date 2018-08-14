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
        {this.props.errors.networkError ? <NetworkError /> : null}
        {!this.props.errors.apiKeyError &&
        !this.props.errors.searchError &&
        !this.props.errors.networkError ? (
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
  { getUserPosition, changeApiKeyError, changeSearchError, changeNetworkError }
)(Dashboard);
