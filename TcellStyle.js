import styled, { css } from 'styled-components';
import { ifprop, switchProp } from 'styled-tools';

const TcellStyle = styled.div`
display:flex;
flex-direction:column;
border:1px solid black;
padding-left:10px;
padding-right:10px;
width:100px;
align-items:center;
${switchProp('col', {
    '1': css`
background-color:#266686;
color:white;
width:100px;
height:50px;
  `,
    '2': css`
  color:black;
  `,
    '3': css`
  background-color:#FF6200;
  color:white;
height:50px;
  `,
    '4': css`
  background-color:#2C8500;
  color:white;
height:50px;
  `,
    '5': css`
  background-color:#FF1D33;
  color:white;
height:50px;
  `
  }
  )}


`;

export default TcellStyle;