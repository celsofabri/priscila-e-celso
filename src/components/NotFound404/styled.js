import styled from 'styled-components';
import { fonts, colors } from 'assets/global/tokens';
import icon404 from 'assets/images/icon-404.png';

export const StyledNotFound404 = styled.section`
  display: block;
  padding: 100px 0;
`;

export const StyledNotFound404Title = styled.h2`
  margin: 0;
  padding-top: 150px;
  font-family: ${fonts.secondary};
  font-size: 80px;
  font-weight: 700;
  color: ${colors.red500};
  text-align: center;
  background-image: url(${icon404});
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 128px auto;
`;

export const StyledNotFound404Subtitle = styled.h3`
  margin: 0;
  font-family: ${fonts.secondary};
  font-size: 48px;
  color: ${colors.blue700};
  text-align: center;
`;

export const StyledNotFound404Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-family: ${fonts.primary};
  font-size: 24px;
  color: ${colors.blue700};
  text-align: center;

  a {
    display: inline-block;
    margin-top: 32px;
    padding: 16px;
    font-size: 12px;
    color: ${colors.white};
    text-decoration: none;
    text-transform: uppercase;
    background-color: ${colors.red500};
    border-radius: 10px;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: ${colors.red500};
      background-color: ${colors.blue700};
    }
  }
`;
