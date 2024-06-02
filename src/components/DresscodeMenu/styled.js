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

export const StyledDresscodeMenuImg = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  img {
    width: 100%;
    height: 400px;
    transform: scale(1);
    transform: scale3d(1, 1, 1);
    transition: all 0.4s ease-in-out;
    object-fit: cover;
  }

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    transition: all 0.4s ease-in-out;
    content: '';
  }
`;

export const StyledDresscodeMenuBox = styled.div`
  position: absolute;
  bottom: 0; 
  left: 0;
  width: 100%;
  padding: 8px;
`;

export const StyledDresscodeMenuLabel = styled.h4`
  position: relative;
  z-index: 50;
  margin: 0;
  font-family: ${fonts.secondary};
  font-size: 32px;
  color: ${colors.white};
  transform: translateY(0);
  transform: translate3d(0, 0, 0);
  transition: all 0.4s ease-in-out;
`;


export const StyledDresscodeMenuItem = styled(Link)`
  position: relative;
  flex: 1 1 33%;
  height: auto;
  margin: 8px;
  text-decoration: none;
  border: 1px solid ${colors.red500};
  border-radius: 4px;
  transition: all 0.4s ease-in-out;
  overflow: hidden;

  &:hover {
    img {
      transform: scale(1.05);
      transform: scale3d(1.05, 1.05, 1.05);
    }

    ${StyledDresscodeMenuLabel} {
      transform: translateY(-20px);
      transform: translate3d(0, -20px, 0);
    }

    ${StyledDresscodeMenuImg} {

      &:after {
        background-color: rgba(0, 0, 0, 0);
      }
    }
  }

  @media screen and (max-width: 1080px) {
    flex: 1 1 33%;
  }

  @media screen and (max-width: 768px) {
    flex: 1 1 100%;
  }
`;