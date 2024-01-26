import styled from 'styled-components';
import { fonts, colors } from 'assets/global/tokens';

export const StyledPeople = styled.section`
  padding: 50px 0;
`;

export const StyledPeopleHeader = styled.header`
  margin-bottom: 32px;
`;

export const StyledPeopleTitle = styled.h2`
  margin: 0;
  font-family: ${fonts.secondary};
  font-size: 48px;
  color: ${colors.blue700};

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const StyledPeopleContainer = styled.div`
  display: block;
`;

export const StyledPeoplePhoto = styled.div`
  width: 50%;
  height: 100%;
  order: 2;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 600px;
    order: 2;
  }

  @media screen and (max-width: 768px) {
    height: 450px;
  }

  @media screen and (max-width: 580px) {
    height: 350px;
  }

  @media screen and (max-width: 420px) {
    height: 250px;
  }

  @media screen and (max-width: 360px) {
    height: 180px;
  }
`;

export const StyledPeopleInfo = styled.div`
  width: 50%;
  height: 100%;
  padding: 32px;
  background-color: ${colors.blue700};
  order: 1;

  @media screen and (max-width: 960px) {
    width: 100%;
    height: auto;
    order: 1;
  }
`;

export const StyledPeopleName = styled.h4`
  margin-top: 0;
  font-family: ${fonts.secondary};
  font-size: 24px;
  color: ${colors.red500};
`;

export const StyledPeopleDetails = styled.div`
  display: block;
  color: ${colors.white};

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const StyledPeopleBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 32px;
  height: 450px;
  border-radius: 8px;
  overflow: hidden;
  -webkit-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.5);

  &:first-child {
    margin-top: 0;
  }

  &:nth-child(2n + 1) {
    ${StyledPeoplePhoto} {
      order: 1;

      @media screen and (max-width: 960px) {
        order: 2;
      }
    }

    ${StyledPeopleInfo} {
      background-color: ${colors.red500};
      order: 2;

      @media screen and (max-width: 960px) {
        order: 1;
      }
    }

    ${StyledPeopleName} {
      color: ${colors.blue700};
    }
  }

  @media screen and (max-width: 960px) {
    height: auto;
  }
`;
