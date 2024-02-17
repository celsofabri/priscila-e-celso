import styled from 'styled-components';
import { fonts, colors } from 'assets/global/tokens';

export const StyledGifts = styled.section`
  display: block;
  padding: 50px 0;
`;

export const StyledGiftsHeader = styled.header`
  margin-bottom: 32px;
`;

export const StyledGiftsTitle = styled.h2`
  margin: 0;
  font-family: ${fonts.secondary};
  font-size: 48px;
  color: ${colors.blue700};

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const StyledGiftsSubtitle = styled.h3`
  margin-top: 0;
  font-family: ${fonts.secondary};
  font-weight: 100;
  font-size: 24px;
  color: ${colors.red500};
`;

export const StyledGiftsContent = styled.div`
  display: block;

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 30%;
  height: 300px;
  text-align: center;

  @media screen and (max-width: 768px) {
    max-width: 45%;
    height: 200px;
    margin: 16px 0;
  }

  @media screen and (max-width: 420px) {
    max-width: 100%;
  }
`;

export const StyledListAnchor = styled.a`
  text-decoration: none;
`;

export const StyledListImg = styled.img`
  max-width: 75%;
  height: auto;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`
