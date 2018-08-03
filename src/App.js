import React, { Component } from 'react';

import './App.css';

import Dashboard from './components/layout/Dashboard';
import Navbar from './components/layout/Navbar';

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Navbar />
          <div className="container">
            <Dashboard />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
