import React, { Component } from 'react';
import jsonp from 'jsonp';
import uuid from 'uuid';
import { connect } from 'react-redux';
import classnames from 'classnames';

import {
  getCurrentWeather,
  getComingWeather
} from '../../actions/weatherActions';

import {
  changeSearchError,
  changeNetworkError,
  changeServerError
} from '../../actions/errorActions';

class SearchBar extends Component {
  state = {
    searchInput: '',
    results: [],
    error: ''
  };

  getWeatherData = city => {
    const { apiKey, temperatureUnit } = this.props.settings;

    const params = [
      {
        type: 'city',
        data: city
      },
      apiKey,
      temperatureUnit
    ];

    this.props.changeSearchError(false);
    this.props.changeNetworkError(false);
    this.props.changeServerError(false);

    this.setState({ error: '' });

    jsonp(
      `http://gd.geobytes.com/GetCityDetails?q=${city}`,
      null,
      (err, data) => {
        if (err) {
          console.log(err.message);
        } else {
          if (data.geobytesinternet !== '') {
            params[0].data = city.split(',')[0] + ',' + data.geobytesinternet;
          } else if (data.geobytesinternet === '') {
            params[0].data = city.split(',')[0];
          }

          this.props.getCurrentWeather(...params);
          this.props.getComingWeather(...params);
        }
      }
    );
  };

  onSubmit = e => {
    const { searchInput } = this.state;

    e.preventDefault();

    // Check input
    if (searchInput.trim() === '') {
      this.setState({ error: 'Please enter a city' });
    } else {
      this.getWeatherData(searchInput);
    }

    this.setState({ searchInput: searchInput.trim(), results: [] });
  };

  onClick = e => {
    this.setState({
      searchInput: e.target.getAttribute('data-city'),
      results: []
    });

    this.getWeatherData(e.target.getAttribute('data-city'));
  };

  onChange = e => {
    const searchBar = e.target;

    jsonp(
      `http://gd.geobytes.com/AutoCompleteCity?q=${e.target.value}`,
      null,
      (err, data) => {
        if (err) {
          console.log(err.message);
        } else {
          if (data[0] !== '%s' && data[0] !== '') {
            this.setState({ results: data });
          } else {
            this.setState({ results: [] });
          }
        }
      }
    );

    this.setState({ searchInput: searchBar.value });
  };

  render() {
    const { searchInput, results, error } = this.state;

    return (
      <div className="mb-3">
        <form onSubmit={this.onSubmit}>
          <div className="input-group">
            <input
              type="text"
              className={classnames('form-control', {
                'is-invalid': error
              })}
              placeholder="Search for a city..."
              onChange={this.onChange}
              value={searchInput}
            />

            <div className="input-group-append">
              <button type="submit" className="btn btn-dark">
                <span>
                  <i className="fas fa-search" />
                </span>
              </button>
            </div>

            {error && <div className="invalid-feedback">{error}</div>}
          </div>
        </form>

        <ul className="list-group mt-2">
          {results.map(x => (
            <li key={uuid()} className="list-group-item">
              <a
                data-city={x}
                onClick={this.onClick}
                className="text-dark"
                href="#!"
              >
                {x}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settings
});

export default connect(
  mapStateToProps,
  {
    getCurrentWeather,
    getComingWeather,
    changeSearchError,
    changeNetworkError,
    changeServerError
  }
)(SearchBar);
