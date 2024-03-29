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
  padding: 32px;
  background-color: ${colors.blue700};

  img {
    max-width: 100%;
    height: auto;
    animation: ${smooth} 1.5s ease-in-out infinite;
  }
`;
