import React, { CSSProperties } from 'react';
import { HashLoader } from 'react-spinners';

const wrapperStyle: CSSProperties = {
  height: '100vh',
  width: '100%',
  display: 'grid',
  placeItems: 'center',
  background: 'rgba(216, 216, 216, 0.35)'
};

const Loading: React.FC = () => {
  return (
    <div style={wrapperStyle}>
      <HashLoader color="var(--blue)" />
    </div>
  );
};

export default Loading;
