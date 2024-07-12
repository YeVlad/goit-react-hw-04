import React from 'react';
import { Audio } from 'react-loader-spinner';

const Loader: React.FC = () => {
  return (
    <div className="loading-area">
      <Audio
        height="100"
        width="100"
        color="blue"
        ariaLabel="Loading"
      />
    </div>
  );
};

export default Loader;
