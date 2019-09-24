import React from 'react';
import TbodyStyle from './TbodyStyle';

const Tbody = ({ children }) => {

  return (
    <TbodyStyle>
      {children}
    </TbodyStyle>
  )
}

export default Tbody;