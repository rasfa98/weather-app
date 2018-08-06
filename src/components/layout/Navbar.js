import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <a href="#!" className="navbar-brand">
          WeatherApp
        </a>

        <form className="form-inline">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
            />

            <ul className="navbar-nav ml-auto" />

            <div className="input-group-append">
              <button type="submit" className="btn btn-dark">
                <span>
                  <i className="fas fa-search" />
                </span>
              </button>
            </div>
          </div>
        </form>
      </nav>
    );
  }
}

export default Navbar;
