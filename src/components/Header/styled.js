import styled from 'styled-components';
import { StyledWrapper } from 'assets/global/styled';
import { colors } from 'assets/global/tokens';

export const StyledHeader = styled.div`
  width: 100%;
  padding: 32px 0;
  background-color: ${colors.blue700};

  ${StyledWrapper} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
