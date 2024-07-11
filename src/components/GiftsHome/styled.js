import styled, { css } from 'styled-components';
import { StyledWrapper } from 'assets/global/styled';
import { fonts, colors } from 'assets/global/tokens';

export const StyledGifts = styled.section`
  padding: 50px 0;
`;

export const StyledGiftsHeader = styled.header`
  display: block;
`;

export const StyledGiftsTitle = styled.h2`
  margin: 0;
  font-family: ${fonts.secondary};
  font-size: 48px;
  color: ${colors.blue700};
`;

export const StyledGiftsContainer = styled.div`
  display: flex;

  ${StyledWrapper} {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const StyledGiftsPhoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
  order: 2;

  img {
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 420px) {
    height: 150px;
  }
`;

export const StyledGiftsInfo = styled.div`
  width: 100%;
  height: 100%;
  padding: 32px;
  background-color: ${colors.blue700};
`;

export const StyledGiftsName = styled.h4`
  margin-top: 0;
  font-family: ${fonts.secondary};
  font-size: 24px;
  color: ${colors.red500};
`;

export const StyledGiftsDetails = styled.div`
  display: block;
  color: ${colors.white};

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const StyledGiftsBox = styled.div`
  width: 30%;
  display: block;
  margin-top: 32px;
  border-radius: 8px;
  overflow: hidden;
  -webkit-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 1020px) {
    width: 48.5%;
  }

  @media screen and (max-width: 620px) {
    width: 100%;
  }
`;

export const StyledGiftsPrice = styled.strong`
  font-size: 32px;
`;

export const StyledGiftsAction = styled.div`
  margin-top: 16px;

  a {
    display: inline-block;
    padding: 16px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1px;
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

  ${(props) =>
    props.$unavaliable &&
    css`
      a {
        color: ${colors.black};
        background-color: #e8e8e8;
        pointer-events: none;
        cursor: not-allowed;

        &:hover {
          color: ${colors.black};
          background-color: #e8e8e8;
        }
      }
    `}
`;
