import styled from 'styled-components';
import bgHands from 'assets/images/bg-hands.svg';
import bgVilla from 'assets/images/bg-villa-do-rocio.jpg';
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
  font-family: ${fonts.primary};
  font-weight: 300;
  color: #9f9f63;

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
    background-color: #9f9f63;
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
  color: #9f9f63;

  @media screen and (max-width: 960px) {
    font-size: 28px;
  }
`;

export const StyledTimer = styled.section`
  padding: 100px 0;
  text-align: center;
  background-color: #f7e7e0;
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
    color: #000;
  }

  p {
    font-family: ${fonts.primary};
    font-size: 34px;
    font-weight: 300;
    color: #000;
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

export const StyledAddress = styled.section`
  position: relative;
  padding: 100px 0;
  margin: 0;
  background-image: url(${bgVilla});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.3);
    content: '';
  }
`;

export const StyledAddressHeader = styled.section`
  max-width: 800px;
  margin: 0 auto 150px auto;
  color: #072441;
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
      bottom: 0;
      right: 50%;
      margin-right: -25px;
    }
  }

  @media screen and (max-width: 520px) {
    font-size: 48px;
  }
`;

export const StyledAddressContent = styled.section`
  width: 100%;
  padding: 100px 0;

  @media screen and (max-width: 620px) {
    padding: 50px 0;
  }
`;

export const StyledAddressInfo = styled.section`
  position: relative;
  z-index: 1;
  width: 50%;

  h3 {
    font-family: ${fonts.secondary};
    font-size: 48px;
    font-weight: 700;
    color: #fff;
  }

  address {
    display: block;
    margin-bottom: 32px;
    font-size: 16px;
    color: #000;
  }

  a {
    display: inline-block;
    padding: 16px;
    font-size: 12px;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    background-color: #dd9788;
    border-radius: 10px;
    transition: all .2s ease-in-out;

    &:hover {
      color: #dd9788;
      background-color: #fff;
    }
  }

  @media screen and (max-width: 620px) {
    width: 75%;

    h3 {
      font-size: 36px;
      line-height: 1;
    }

    address {
      font-size: 14px;
    }
  }
`;

export const StyledFooter = styled.footer`
  padding: 100px 0;
  background-color: #072441;

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
  color: #dd9788;
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

export const StyledFooterAnchor = styled.a`
  position: relative;
  display: inline-block;  
  font-size: 14px;
  color: #fff;
  text-decoration: none;
  transition: all .2s ease-in-out;

  &:before {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: #dd9788;
    transition: all .2s ease-in-out;
    content: ''
  }

  &:hover {
    padding-left: 15px;

    &:before {
      width: 5px;
    }
  }
`;
