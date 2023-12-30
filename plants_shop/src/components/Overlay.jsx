import React from 'react';
import '../styles/overlay.css';

const LoadingOverlay = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }

  return (
    <div className="loading-overlay">
      <div className="loading-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingOverlay;