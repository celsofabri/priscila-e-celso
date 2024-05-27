import styled from 'styled-components';
import { Link } from 'gatsby';
import { colors } from 'assets/global/tokens';

export const StyledFooter = styled.footer`
  padding: 100px 0;
  background-color: ${colors.blue700};

  @media screen and (max-width: 768px) {
    padding: 50px 0;
  }
`;

export const StyledFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const StyledFooterLogo = styled.h2`
  width: 22.5%;
  margin: 0;
  padding: 0;

  img {
    max-width: 150px;
    height: auto;
  }

  @media screen and (max-width: 620px) {
    width: 100%;
    text-align: center;
    margin-bottom: 32px;
  }
`;

export const StyledFooterMenu = styled.div`
  width: 22.5%;

  @media screen and (max-width: 620px) {
    width: 48.5%;
    text-align: center;
  }

  @media screen and (max-width: 490px) {
    width: 100%;
    margin-top: 32px;

    &:first-child {
      margin-top: 0;
    }
  }
`;

export const StyledFooterCategory = styled.h3`
  margin-top: 0;
  color: ${colors.red500};
`;

export const StyledFooterList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const StyledFooterItem = styled.li`
  margin-top: 8px;

  &:first-child {
    margin-top: 0;
  }
`;

export const StyledFooterAnchor = styled(Link)`
  position: relative;
  display: inline-block;
  font-size: 14px;
  color: ${colors.white};
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:before {
    position: absolute;
    bottom: 0;
    left: -15px;
    width: 0;
    height: 100%;
    background-color: ${colors.red500};
    transition: all 0.2s ease-in-out;
    content: '';
  }

  &:hover {
    &:before {
      width: 5px;
    }
  }
`;
