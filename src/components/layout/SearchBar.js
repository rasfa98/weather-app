import React, { Component } from 'react';
import jsonp from 'jsonp';
import uuid from 'uuid';

class SearchBar extends Component {
  state = {
    query: '',
    results: ['Stockholm', 'Gothenburg', 'New Zeland']
  };

  onClick = e => {
    this.setState({ query: e.target.getAttribute('data-city') });
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
          if (data[0] !== '%s') {
            this.setState({ results: data });
          }
        }
      }
    );

    this.setState({ query: searchBar.value });
  };

  render() {
    return (
      <div className="mb-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter city..."
            onChange={this.onChange}
            value={this.state.query}
          />
        </div>

        <ul className="list-group mt-1">
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

export default SearchBar;
