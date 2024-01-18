import styled from 'styled-components';
import bgHands from './images/bg-hands.png';

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
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  color: #9F9F63;
`;

export const StyledScheduleSubtitle = styled.h3`
  margin-top: 0;
  font-size: 28px;
  font-weight: 300;
  text-transform: uppercase;
`;

export const StyledScheduleTitle = styled.h2`
  position: relative;
  z-index: 1;
  margin: 0;
  font-size: 80px;
  font-family: 'Beloved Script', serif;
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
`;

export const StyledScheduleContent = styled.div`
  display: flex;
  justify-content: space-between;
  aling-items: center;
  flex-wrap: wrap;
`;

export const StyledScheduleItem = styled.div`
  width: 48.5%;
  font-family: 'Montserrat', sans-serif;
  color: #ffffff;
  text-align: center;

  p {
    max-width: 430px;
    margin: 0 auto;
    font-size: 18px;
    font-weight: 300;
  }
`;

export const StyledScheduleItemTitle = styled.h4`
  font-family: 'Beloved Script', serif;
  font-size: 34px;
  font-weight: 700;
  color: #9F9F63;
`

export const StyledTimer = styled.section`
  padding: 100px 0;
  text-align: center;
  background-color: #F7E7E0;
  background-image: url(${bgHands});
  background-repeat: no-repeat;
  background-size: inherit;
  background-position: top center;
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
  font-family: 'Beloved Script', serif;
  background-color: #F7E7E0;

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
    font-family: 'Montserrat', sans-serif;
    font-size: 100px;
    font-weight: 700;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 34px;
    font-weight: 300;
  }
`;

export const StyledTimerFooter = styled.footer`
  margin: 150px auto 0 auto;
  font-size: 20px;  
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;

  blockquote {
    max-width: 768px;
    margin: 0 auto;
    padding: 16px;
    font-weight: 700;
    font-style: italic;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 4px;
  }
`;