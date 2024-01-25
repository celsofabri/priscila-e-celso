import styled from 'styled-components';
import { StyledWrapper } from 'assets/global/styled';
import { colors } from 'assets/global/tokens';

export const StyledHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  padding: 32px 0;

  ${StyledWrapper} {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;
