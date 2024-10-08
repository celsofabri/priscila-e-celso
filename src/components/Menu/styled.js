import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { colors } from 'assets/global/tokens';

export const StyledMenu = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 51;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 0px 250px;
  background-color: ${colors.blue700};
  opacity: 0;
  visibility: hidden;
  transform: scale(1.15);
  transform: scale3d(1.15, 1.15, 1.15);
  transition: all 0.4s ease-out;
  overflow: auto;

  ${(props) =>
    props.open &&
    css`
      opacity: 1;
      visibility: visible;
      transform: scale(1);
      transform: scale3d(1, 1, 1);
    `}

  @media screen and (max-width: 1200px) {
    padding: 0 100px;
  }

  @media screen and (max-width: 890px) {
    padding: 0 60px;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
    padding: 0 24px;
  }
`;

export const StyledMenuList = styled.ul`
  display: block;
  margin: -10px 0;
  padding: 0;
  list-style-type: none;
`;

export const StyledMenuItem = styled.li`
  margin: 30px 0;
  text-align: right;

  @media screen and (max-height: 450px) {
    margin: 20px 0;
  }

  @media screen and (max-height: 360px) {
    margin: 16px 0;
  }

  @media screen and (max-height: 360px) {
    margin: 8px 0;
  }
`;

export const StyledMenuAnchor = styled(Link)`
  position: relative;
  display: inline-block;
  font-size: 76px;
  font-weight: 900;
  color: ${colors.red500};
  line-height: 1.2;
  text-transform: lowercase;
  text-decoration: none;
  transition: all 0.4s ease-out;
  cursor: pointer;

  &:before {
    margin-right: 10px;
    opacity: 0;
    content: '/';
  }

  &:hover {
    color: ${colors.white};

    &:before {
      opacity: 1;
    }
  }

  @media screen and (max-height: 820px) {
    font-size: 52px;
  }

  @media screen and (max-height: 620px) {
    font-size: 42px;
  }

  @media screen and (max-height: 450px) {
    font-size: 32px;
  }

  @media screen and (max-height: 360px) {
    font-size: 24px;
  }

  @media screen and (max-height: 280px) {
    font-size: 18px;
  }

  @media screen and (max-width: 768px) {
    font-size: 60px;

    &:before {
      opacity: 1;
    }
  }

  @media screen and (max-width: 520px) {
    font-size: 32px;
  }
`;
