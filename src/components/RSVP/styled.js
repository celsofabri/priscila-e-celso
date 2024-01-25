import styled from 'styled-components';
import { fonts, colors } from 'assets/global/tokens';

export const StyledRSVP = styled.section`
  padding: 100px 0;
  background-color: ${colors.blue700};
`;

export const StyledRSVPHeader = styled.header`
  max-width: 800px;
  margin: 0 auto 64px auto;
`;

export const StyledRSVPTitle = styled.h2`
  position: relative;
  z-index: 1;
  margin: 0;
  font-size: 80px;
  font-family: ${fonts.secondary};
  color: ${colors.red500};
  text-align: center;

  &:before,
  &:after {
    position: absolute;
    z-index: 0;
    top: 55%;
    width: 100px;
    height: 1px;
    background-color: ${colors.red500};
    content: '';
  }

  &:before {
    left: -100px;
  }

  &:after {
    right: -100px;
  }

  @media screen and (max-width: 960px) {
    font-size: 60px;

    &:before,
    &:after {
      width: 50px;
    }

    &:before {
      top: 0;
      left: 50%;
      margin-left: -25px;
    }

    &:after {
      top: auto;
      bottom: 0;
      right: 50%;
      margin-right: -25px;
    }
  }

  @media screen and (max-width: 520px) {
    font-size: 48px;
  }
`;

export const StyledRSVPContent = styled.div`
  text-align: center;

  p {
    color: ${colors.white};
  }

  a {
    display: inline-block;
    margin-top: 32px;
    padding: 16px;
    font-size: 12px;
    color: ${colors.white};
    text-decoration: none;
    text-transform: uppercase;
    background-color: ${colors.red500};
    border-radius: 10px;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: ${colors.red500};
      background-color: ${colors.white};
    }
  }
`;
