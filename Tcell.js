import React from 'react';
import TcellStyle from './TableStyle';

const Tcell = ({ children,...styles }) => {
  return (
    <TcellStyle {...styles}>
      {children}
    </TcellStyle>
  )
}

export default Tcell;