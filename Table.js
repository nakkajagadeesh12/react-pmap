import React from "react";
import TableStyle from "./TableStyle";
import TableScroll from "./TableScroll";

const Table = ({ children }) => {
  const scrollBar = () => {};
  return (
    <TableStyle>
      <TableScroll onScroll={() => scrollBar} />
      {children}
    </TableStyle>
  );
};

export default Table;
