import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div className="input-group mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Enter city..."
        />
      </div>
    );
  }
}

export default SearchBar;
