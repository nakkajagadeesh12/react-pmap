import React from 'react';
import TrowStyle from './TrowStyle';

const Trow = ({ children }) => {

  return (
    <TrowStyle>
      {children}
    </TrowStyle>
  )
}

export default Trow;