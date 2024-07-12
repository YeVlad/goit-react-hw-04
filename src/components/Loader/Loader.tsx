import React from 'react';
import { Audio } from 'react-loader-spinner';

type Props = {
  height:  string; 
  width:  string; 
  color: string; 
  ariaLabel: string; 
};

const Loader: React.FC<Props> = ({
  height,
  width,
  color = 'green',
  ariaLabel = 'three-dots-loading',
}) => {
  return (
    <div className="loading-area">
      <Audio
        height={height}
        width={width}
        color={color}
        ariaLabel={ariaLabel}
      />
    </div>
  );
};

export default Loader;
