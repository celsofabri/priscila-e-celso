import styled from 'styled-components';
import { Link } from 'gatsby';
import { colors, fonts } from 'assets/global/tokens';

export const StyledDresscodeMenu = styled.section`
  padding: 50px 0;
`;

export const StyledDresscodeMenuTitle = styled.h2`
  margin: 0;
  font-family: ${fonts.secondary};
  font-size: 48px;
  color: ${colors.blue700};

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const StyledDresscodeMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: -8px;
`;

export const StyledDresscodeMenuItem = styled(Link)`
  flex: 1 1 33%;
  margin: 8px;
  text-decoration: none;
  border: 1px solid ${colors.red500};
  border-radius: 4px;
  transition: all 0.4s ease-in-out;

  &:hover {
    opacity: 0.75;

    img {
      transform: scale(0.95);
      transform: scale3d(0.95, 0.95, 0.95);
    }
  }

  @media screen and (max-width: 520px) {
    flex: 1 1 100%;
  }
`;

export const StyledDresscodeMenuImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  img {
    width: auto;
    max-height: 250px;
    transform: scale(1);
    transform: scale3d(1, 1, 1);
    transition: all 0.4s ease-in-out;
  }
`;

export const StyledDresscodeMenuBox = styled.div`
  padding: 8px;
  background-color: ${colors.red500};
`;

export const StyledDresscodeMenuLabel = styled.h4`
  margin: 0;
  font-family: ${fonts.secondary};
  font-size: 32px;
  color: ${colors.blue700};
`;
