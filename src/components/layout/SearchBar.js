import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div className="input-group mb-4">
        <input type="text" className="form-control" placeholder="Search..." />

        <div className="input-group-append">
          <button type="submit" className="btn btn-dark">
            <span>
              <i className="fas fa-search" />
            </span>
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
