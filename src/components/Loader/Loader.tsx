import React from 'react';
import { Audio } from 'react-loader-spinner';

interface Props {
  height: string;
  width: string;
  color: string;
  ariaLabel: string;
}

const Loader: React.FC<Props> = ({
  height,
  width,
  color,
  ariaLabel
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

Loader.defaultProps = {
  height: "100",
  width: "100",
  color: "blue",
  ariaLabel: "Loading"
};

export default Loader;
