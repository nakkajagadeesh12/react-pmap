import React from 'react';
import TcellStyle from './TableStyle';

const Tcell = ({ children }) => {
  return (
    <TcellStyle>
      {children}
    </TcellStyle>
  )
}

export default Tcell;