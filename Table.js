import React from 'react';
import TableStyle from './TableStyle';

const Table = ({ children }) => {

  return (
    <TableStyle>
      table
      {children}
    </TableStyle>
  )
}

export default Table;