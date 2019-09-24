import React from 'react';
import TrowStyle from './TrowStyle';

const Trow = ({ children }) => {

  return (
    <TrowStyle>
      row
      {children}
    </TrowStyle>
  )
}

export default Trow;