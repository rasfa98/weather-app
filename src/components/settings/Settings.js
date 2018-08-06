import React, { Component } from 'react';

class Settings extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">Settings</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="apiKey">API Key</label>
              <input
                type="text"
                className="form-control"
                name="apiKey"
                placeholder="Enter API Key..."
              />
              <small className="form-text text-muted">
                API key for Open Weather Map weather API.
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="options">Temperature Unit</label>

              <br />

              <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-secondary active">
                  <input
                    type="radio"
                    name="options"
                    id="celsius"
                    autoComplete="off"
                    checked
                  />{' '}
                  Celsius
                </label>

                <label className="btn btn-secondary active">
                  <input
                    type="radio"
                    name="options"
                    id="fahrenheit"
                    autoComplete="off"
                  />{' '}
                  Fahrenheit
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Settings;
