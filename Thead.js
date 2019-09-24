import React from 'react';
import TableStyle from './TableStyle';

const Thead = ({ children }) => {

  return (
    <TableStyle>
      head
      {children}
    </TableStyle>
  )
}

export default Thead;