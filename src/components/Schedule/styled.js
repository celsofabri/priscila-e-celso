import styled from 'styled-components';
import { fonts, colors } from 'assets/global/tokens';

export const StyledSchedule = styled.section`
  padding: 100px 0;
  margin: 0;
  background-color: ${colors.blue700};
  text-align: center;
`;

export const StyledScheduleHeader = styled.header`
  max-width: 800px;
  margin: 0 auto 150px auto;
  font-size: 20px;
  font-family: ${fonts.primary};
  font-weight: 300;

  p {
    color: ${colors.red500};
  }

  @media screen and (max-width: 960px) {
    font-size: 16px;
  }
`;

export const StyledScheduleSubtitle = styled.h3`
  margin-top: 0;
  font-size: 28px;
  font-weight: 300;
  text-transform: uppercase;
  color: ${colors.red500};

  @media screen and (max-width: 960px) {
    font-size: 18px;
  }
`;

export const StyledScheduleTitle = styled.h2`
  position: relative;
  z-index: 1;
  margin: 0;
  font-size: 80px;
  font-family: ${fonts.secondary};
  color: ${colors.white};
  background-color: ${colors.blue700};

  &:before,
  &:after {
    position: absolute;
    z-index: 0;
    top: 55%;
    width: 50px;
    height: 1px;
    background-color: ${colors.white};
    content: '';
  }

  &:before {
    left: 0;
  }

  &:after {
    right: 0;
  }

  @media screen and (max-width: 960px) {
    font-size: 60px;
  }

  @media screen and (max-width: 768px) {
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

export const StyledScheduleContent = styled.div`
  display: flex;
  justify-content: space-between;
  aling-items: center;
  flex-wrap: wrap;
`;

export const StyledScheduleItem = styled.div`
  width: 48.5%;
  font-family: ${fonts.primary};
  color: ${colors.white};
  text-align: center;

  img {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
  }

  p {
    max-width: 430px;
    margin: 0 auto;
    font-size: 18px;
    font-weight: 300;
  }

  @media screen and (max-width: 960px) {
    p {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 768px) {
    img {
      width: 50%;
    }
  }

  @media screen and (max-width: 490px) {
    width: 100%;
    margin-top: 64px;

    &:first-child {
      margin-top: 0;
    }

    img {
      width: 30%;
    }
  }
`;

export const StyledScheduleItemTitle = styled.h4`
  font-family: ${fonts.secondary};
  font-size: 34px;
  font-weight: 700;
  color: ${colors.red500};

  @media screen and (max-width: 960px) {
    font-size: 28px;
  }
`;
