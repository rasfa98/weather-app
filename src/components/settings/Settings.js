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
                defaultValue={this.props.apiKey}
              />
            </div>

            <div className="form-group">
              <label htmlFor="temperatureUnit">Temperature Unit</label>
              <select
                name="temperatureUnit"
                className="form-control"
                defaultValue={this.props.temperatureUnit}
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
  apiKey: state.settings.apiKey,
  temperatureUnit: state.settings.temperatureUnit
});

export default connect(
  mapStateToProps,
  { changeApiKey, changeTemperatureUnit }
)(Settings);
