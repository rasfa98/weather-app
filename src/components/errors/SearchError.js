import React from 'react';

const SearchError = () => {
  return (
    <div className="mb-4 card opacity">
      <div className="card-body">
        <h2 className="text-white text-center">
          Can't get weather for the requested city.
        </h2>
      </div>
    </div>
  );
};

export default SearchError;
