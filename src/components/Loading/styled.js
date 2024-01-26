import styled, { keyframes } from 'styled-components';
import { colors } from 'assets/global/tokens';

const smooth = keyframes`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.3;
  }

  100% {
    opacity: 1;
  }
`;

export const StyledLoading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${colors.blue700};

  svg {
    animation: ${smooth} 2s ease-in-out infinite;
  }
`;
