import styled from "styled-components";
import { fonts, colors } from 'assets/global/tokens';
import bgHands from 'assets/images/bg-hands.svg';

export const StyledTimer = styled.section`
  padding: 100px 0;
  text-align: center;
  background-color: ${colors.pink200};
  background-image: url(${bgHands});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

export const StyledTimerHeader = styled.header`
  max-width: 800px;
  margin: 0 auto 150px auto;
  color: ${colors.blue700};
`;

export const StyledTimerTitle = styled.h2`
  position: relative;
  z-index: 1;
  margin: 0;
  font-size: 80px;
  font-family: ${fonts.secondary};

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

  @media screen and (max-width: 960px) {
    font-size: 60px;
  }

  @media screen and (max-width: 768px) {
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

export const StyledTimerContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-itens: center;
  flex-wrap: wrap;
  max-width: 1240px;
  margin: 0 auto;
  padding: 32px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50px;
`;

export const StyledTimerClock = styled.div`
  width: 15%;
  margin: 0 16px;

  h4 {
    margin: 0;
    font-family: ${fonts.primary};
    font-size: 100px;
    font-weight: 700;
    color: ${colors.black};
  }

  p {
    font-family: ${fonts.primary};
    font-size: 34px;
    font-weight: 300;
    color: ${colors.black};
  }

  @media screen and (max-width: 960px) {
    width: 45%;
  }

  @media screen and (max-width: 768px) {
    width: 35%;

    h4 {
      font-size: 60px;
    }

    p {
      font-size: 22px;
    }
  }

  @media screen and (max-width: 460px) {
    width: 100%;
    margin-top: 32px;

    &:first-child {
      margin-top: 0;
    }
  }
`;

export const StyledTimerFooter = styled.footer`
  margin: 150px auto 0 auto;
  font-family: ${fonts.primary};
  font-weight: 300;

  blockquote {
    max-width: 768px;
    margin: 0 auto;
    padding: 16px;
    font-size: 20px;
    font-weight: 700;
    font-style: italic;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 30px;
  }

  @media screen and (max-width: 960px) {
    blockquote {
      font-size: 16px;
    }
  }
`;
