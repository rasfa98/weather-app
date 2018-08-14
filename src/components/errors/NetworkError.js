import React from 'react';

const NetworkError = () => {
  return (
    <div className="mb-4 card opacity">
      <div className="card-body">
        <h2 className="text-white text-center">
          There seems to be a problem with your internet connection, please try
          again...
        </h2>
      </div>
    </div>
  );
};

export default NetworkError;
