import styled from 'styled-components';
import { fonts, colors } from 'assets/global/tokens';

export const StyledFamily = styled.section`
  padding: 50px 0;
`;

export const StyledFamilyHeader = styled.header`
  margin-bottom: 32px;
`;

export const StyledFamilyTitle = styled.h2`
  margin: 0;
  font-family: ${fonts.secondary};
  font-size: 48px;
  color: ${colors.blue700};

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const StyledFamilySubtitle = styled.h3`
  margin-top: 0;
  font-family: ${fonts.secondary};
  font-weight: 100;
  font-size: 24px;
  color: ${colors.red500};
`;

export const StyledFamilyContent = styled.main`
  display: block;

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const StyledFamilyCover = styled.header`
  position: relative;
  width: 100%;
  padding-left: 24px;
  margin-bottom: 32px;
  border-left: 45px solid ${colors.red500};

  @media screen and (max-width: 480px) {
    padding-left: 16px;
    border-left: 20px solid ${colors.red500};
  }
`;

export const StyledFamilyBox = styled.div`
  display: block;
  margin: 32px 0;

  &:nth-child (2n + 1) {
    ${StyledFamilyCover} {
      border-left: 45px solid ${colors.blue700};
    }
  }
`;

export const StyledFamilyName = styled.h3`
  position: relative;
  z-index: 5;
  margin: 0;
  font-family: ${fonts.secondary};
  font-size: 48px;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const StyledFamilyRelationship = styled.h4`
  position: relative;
  z-index: 5;
  margin: 0;
  font-family: ${fonts.primary};
  font-size: 24px;
  font-weight: 300;
  color: ${colors.red500};

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const StyledFamilyDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;

  img {
    display: inline-block;
    max-width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center;
  }
`;

export const StyledFamilyPhoto = styled.div`
  width: 45%;

  img {
    display: inline-block;
    width: 100%;
    height: 550px;
    object-fit: cover;
    object-position: center;
    border-radius: 8px;
    -webkit-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.5);
    box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.5);
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    img {
      height: auto;
    }
  }
`;

export const StyledFamilyText = styled.div`
  width: 50%;
  margin: -20px 0;

  @media screen and (max-width: 960px) {
    width: 100%;
    margin: 0;
  }
`;
