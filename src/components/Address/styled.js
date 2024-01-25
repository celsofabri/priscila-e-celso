import styled from 'styled-components';
import { fonts, colors } from 'assets/global/tokens';

export const StyledAddress = styled.section`
  position: relative;
  margin: 0;
`;

export const StyledAddressHeader = styled.section`
  max-width: 800px;
  margin: 0 auto 150px auto;
  color: ${colors.blue700};
`;

export const StyledAddressTitle = styled.section`
  position: relative;
  z-index: 1;
  margin: 0;
  font-size: 80px;
  font-family: ${fonts.secondary};
  text-align: center;

  &:before,
  &:after {
    position: absolute;
    z-index: 0;
    top: 55%;
    width: 100px;
    height: 1px;
    background-color: ${colors.blue700};
    content: '';
  }

  &:before {
    left: 0;
  }

  &:after {
    right: 0;
  }

  @media screen and (max-width: 1440px) {
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

  @media screen and (max-width: 1080px) {
    text-align: left;

    &:before {
      left: 0;
      margin-left: 0;
    }

    &:after {
      right: auto;
      left: 0;
      margin-right: 0;
    }
  }

  @media screen and (max-width: 960px) {
    font-size: 60px;
  }

  @media screen and (max-width: 768px) {
    text-align: center;

    &:before {
      top: 0;
      left: 50%;
      margin-left: -25px;
    }

    &:after {
      top: auto;
      bottom: 0;
      right: 50%;
      left: auto;
      margin-right: -25px;
    }
  }

  @media screen and (max-width: 520px) {
    font-size: 48px;
  }
`;

export const StyledAddressContent = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: 75vh;

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

export const StyledAddressPlace = styled.div`
  width: 50%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 300px;
  }

  @media screen and (max-width: 520px) {
    width: 100%;
    height: 200px;
  }
`;

export const StyledAddressInfo = styled.div`
  position: relative;
  z-index: 1;
  width: 50%;
  padding: 64px;
  background-color: ${colors.red500};

  h3 {
    font-family: ${fonts.secondary};
    font-size: 48px;
    font-weight: 700;
    color: ${colors.white};
  }

  address {
    display: block;
    margin-bottom: 32px;
    font-size: 16px;
    color: ${colors.black};
  }

  a {
    display: inline-block;
    padding: 16px;
    font-size: 12px;
    color: ${colors.red500};
    text-decoration: none;
    text-transform: uppercase;
    background-color: ${colors.white};
    border-radius: 10px;
    transition: all .2s ease-in-out;

    &:hover {
      color: ${colors.white};
      background-color: ${colors.red500};
    }
  }

  @media screen and (max-width: 1080px) {
    h3 {
      font-size: 32px;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: 620px) {

    h3 {
      font-size: 36px;
      line-height: 1;
    }

    address {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 520px) {
    text-align: center;
  }
`;

export const StyledRSVP = styled.section`
  padding: 100px 0;
`;
