import React from 'react';
import TrowStyle from './TrowStyle';

const Trow = ({ children, ...styles }) => {

  return (
    <TrowStyle {...styles}>
      {children}
    </TrowStyle>
  )
}

export default Trow;