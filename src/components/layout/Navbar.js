import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-dark mb-3">
        <Link to="/" className="navbar-brand">
          WeatherApp
        </Link>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <span className="fas fa-home" />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/settings" className="nav-link">
              <span className="fas fa-cog" />
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
