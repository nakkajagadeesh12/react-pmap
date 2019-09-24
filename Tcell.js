import React from 'react';
import TcellStyle from './TcellStyle';

const Tcell = ({ children,...styles }) => {
  return (
    <TcellStyle {...styles}>
      {children}
    </TcellStyle>
  )
}

export default Tcell;