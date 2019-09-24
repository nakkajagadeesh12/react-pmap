import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

const Wrapper = styled.div`
${ifProp('col', css`
display:flex`)}
`;

export default Wrapper;