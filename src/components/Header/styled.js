import styled from 'styled-components';
import { StyledWrapper } from 'generic';
import { colors } from 'assets/global/tokens';

export const StyledHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;  
  padding: 16px 0;

  ${StyledWrapper} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
