import styled from 'styled-components';
import { fonts } from 'assets/global/tokens';
import ImgFlower from 'assets/images/flower.svg';

export const StyledBanner = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  &:before {
    position: absolute;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
  }
`;

export const StyledImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledBannerContent = styled.div`
  position: relative;
  z-index: 10;
  padding-bottom: 100px;
  text-align: center;
  background-image: url(${ImgFlower});
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: contain;

  img {
    margin-top: 32px;
  }
`;

export const StyledTitle = styled.h3`
  margin: 16px 0;
  font-family: ${fonts.secondary};
  font-size: 100px;
  font-weight: 700;
  color: #fff;

  img {
    max-width: 100%;
    height: auto;
  }

  @media screen and (max-width: 768px) {
    font-size: 80px;
  }
`;

export const StyledSubtitle = styled.h4`
  position: relative;
  margin: 0;
  padding-bottom: 16px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: 36px;
  color: #fff;
  text-transform: uppercase;

  &:after {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 150px;
    height: 1px;
    margin-left: -75px;
    background-color: #fff;
    content: '';
  }

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const StyledDate = styled.h4`
  position: relative;
  margin: 0;
  padding-top: 16px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: 36px;
  text-transform: uppercase;
  color: #fff;
  text-transform: uppercase;

  &:before {
    position: absolute;
    top: 0;
    left: 50%;
    width: 150px;
    height: 1px;
    margin-left: -75px;
    background-color: #fff;
    content: '';
  }

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;
