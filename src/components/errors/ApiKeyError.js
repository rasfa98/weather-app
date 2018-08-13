import React from 'react';

const ApiKeyError = () => {
  return (
    <div className="mb-4 card opacity">
      <div className="card-body">
        <h2 className="text-white text-center">
          No valid API key found, please go to the settings page and add one.
        </h2>
      </div>
    </div>
  );
};

export default ApiKeyError;
