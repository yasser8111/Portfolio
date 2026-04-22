import React from 'react';

const Preloader = ({ isLoading }) => {
  return (
    <div className={`preloader-container ${!isLoading ? 'preloader-hidden' : ''}`}>
      <div className="square-loader"></div>
    </div>
  );
};

export default Preloader;
