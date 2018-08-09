import React, { Component } from 'react';
import jsonp from 'jsonp';
import uuid from 'uuid';
import { connect } from 'react-redux';

import {
  getCurrentWeather,
  getComingWeather
} from '../../actions/weatherActions';

class SearchBar extends Component {
  state = {
    query: '',
    results: []
  };

  getWeatherData = query => {
    this.props.getCurrentWeather({
      type: 'city',
      data: query
    });

    this.props.getComingWeather({
      type: 'city',
      data: query
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.getWeatherData(this.state.query);
  };

  onClick = e => {
    this.setState({ query: e.target.getAttribute('data-city'), results: [] });
    this.getWeatherData(e.target.getAttribute('data-city').split(',')[0]);
  };

  onChange = e => {
    const searchBar = e.target;

    jsonp(
      `http://gd.geobytes.com/AutoCompleteCity?template=<geobytes%20city>,%20<geobytes%20country>&q=${
        e.target.value
      }`,
      null,
      (err, data) => {
        if (err) {
          console.log(err.message);
        } else {
          if (data[0] !== '%s') {
            this.setState({ results: data });
          } else {
            this.setState({ results: [] });
          }
        }
      }
    );

    this.setState({ query: searchBar.value });
  };

  render() {
    return (
      <div className="mb-4">
        <form onSubmit={this.onSubmit}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              onChange={this.onChange}
              value={this.state.query}
            />
            <div className="input-group-append">
              <button type="submit" className="btn btn-dark">
                <span>
                  <i className="fas fa-search" />
                </span>
              </button>
            </div>
          </div>
        </form>

        <ul className="list-group mt-2">
          {this.state.results.map(x => (
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

export default connect(
  null,
  { getCurrentWeather, getComingWeather }
)(SearchBar);
