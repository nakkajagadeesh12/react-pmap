import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';


const TrowStyle = styled.div`
display:flex;
flex-direction:row;
${ifProp('col', css`
width:50%;
`)}
`;

export default TrowStyle;