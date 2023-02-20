import React from 'react';
import '../Scss/index.scss';
const Grid = ({ children }) => {
  return (
    <div className="row">
      {children}
    </div>
  );
};

export default Grid;