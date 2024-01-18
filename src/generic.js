import styled from 'styled-components';
import bgHands from 'assets/images/bg-hands.svg';
import { fonts } from 'assets/global/tokens';

export const StyledWrapper = styled.div`
  display: block;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 32px;
`;

export const StyledSchedule = styled.section`
  padding: 100px 0;
  margin: 0;
  background-color: #072441;
  text-align: center;
`;

export const StyledScheduleHeader = styled.header`
  max-width: 800px;
  margin: 0 auto 150px auto;
  font-size: 20px;  
  font-family: ${fonts.montserrat}
  font-weight: 300;
  color: #9F9F63;

  @media screen and (max-width: 960px) {
    font-size: 16px;
  }
`;

export const StyledScheduleSubtitle = styled.h3`
  margin-top: 0;
  font-size: 28px;
  font-weight: 300;
  text-transform: uppercase;

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
  background-color: #072441;

  &:before,
  &:after {
    position: absolute;
    z-index: 0;
    top: 55%;
    width: 50px;
    height: 1px;
    background-color: #9F9F63;
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
      bottom: 10px;
      right: 50%;
      margin-right: -25px;
    }
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
  font-family: ${fonts.montserrat}
  color: #ffffff;
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
  color: #9F9F63;

  @media screen and (max-width: 960px) {
    font-size: 28px;
  }
`

export const StyledTimer = styled.section`
  padding: 100px 0;
  text-align: center;
  background-color: #F7E7E0;
  background-image: url(${bgHands});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

export const StyledTimerHeader = styled.header`
  max-width: 800px;
  margin: 0 auto 150px auto;
  color: #072441;
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
    background-color: #072441;
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
      bottom: 10px;
      right: 50%;
      margin-right: -25px;
    }
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
    font-family: ${fonts.montserrat}
    font-size: 100px;
    font-weight: 700;
  }

  p {
    font-family: ${fonts.montserrat}
    font-size: 34px;
    font-weight: 300;
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
  font-family: ${fonts.montserrat}
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