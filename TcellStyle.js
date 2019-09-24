import styled, { css } from 'styled-components';
import { ifprop, switchProp } from 'styled-tools';

const TcellStyle = styled.div`
display:flex;
flex-direction:column;
border:1px solid black;
padding-left:10px;
padding-right:10px;
height:20px;
width:100px;
align-items:center;
${switchProp('col', {
    '1': css`
background-color:purple;
color:white;
height:50px;
  `,
    '2': css`
  color:black;
  `
  }
  )}


`;

export default TcellStyle;