import React from 'react';
import TableStyle from './TableStyle';

const Table = ({ children }) => {

  return (
    <TableStyle>
      {children}
    </TableStyle>
  )
}

export default Table;