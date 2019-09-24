import React from 'react';
import TableStyle from './TableStyle';

const Thead = ({ children }) => {

  return (
    <TableStyle>
      {children}
    </TableStyle>
  )
}

export default Thead;