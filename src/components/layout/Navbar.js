import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-dark mb-3">
        <a href="#!" className="navbar-brand">
          WeatherApp
        </a>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a href="#!" className="nav-link">
              <span className="fas fa-sync-alt" style={{ fontSize: '30px' }} />
            </a>
          </li>
          <li className="nav-item">
            <a href="#!" className="nav-link">
              <span className="fas fa-cog" style={{ fontSize: '30px' }} />
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
