import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  changeApiKey,
  changeTemperatureUnit
} from '../../actions/settingsActions';

class Settings extends Component {
  changeApiKeyChange = e => {
    this.props.changeApiKey(e.target.value);
  };

  changeTemperatureUnitChange = e => {
    this.props.changeTemperatureUnit(e.target.value);
  };

  render() {
    const { apiKey, temperatureUnit } = this.props.settings;

    return (
      <div className="card opacity text-white">
        <div className="card-header">Settings</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="apiKey">API Key (Open Weather Map)</label>
              <input
                type="text"
                className="form-control"
                name="apiKey"
                placeholder="Enter API Key..."
                onChange={this.changeApiKeyChange}
                value={apiKey}
              />
            </div>

            <div className="form-group">
              <label htmlFor="temperatureUnit">Temperature Unit</label>
              <select
                name="temperatureUnit"
                className="form-control"
                value={temperatureUnit}
                onChange={this.changeTemperatureUnitChange}
              >
                <option value="celsius">Celsius</option>
                <option value="fahrenheit">Fahrenheit</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settings
});

export default connect(
  mapStateToProps,
  { changeApiKey, changeTemperatureUnit }
)(Settings);
