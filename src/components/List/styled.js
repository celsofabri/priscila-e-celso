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

export const StyledBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 60px 0;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  width: 45%;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const StyledListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
`;

export const StyledListAnchor = styled.a`
  display: block;
  width: 100%;
  margin: 8px 0;
  padding: 8px 16px;
  color: ${colors.blue700};
  border: 1px solid ${colors.blue700};
  border-radius: 30px;
  text-decoration: none;
  transition: all .2s ease-in-out;

  &:hover {
    color: ${colors.red500};
    background-color: ${colors.blue700};
  }
`;

export const StyledQRCode = styled.div`
  width: 45%;
  padding: 60px;
  text-align: center;
  color: ${colors.white};
  background-color: ${colors.blue700};
`;

export const StyledQRCodeImg = styled.img`
  display: block;
  max-width: 50%;
  margin: 0 auto;
`;

export const StyledQRCodeButton = styled.button`
display: inline-block;
margin-top: 32px;
padding: 16px;
font-size: 12px;
color: ${colors.white};
text-decoration: none;
text-transform: uppercase;
text-align: center;
background-color: ${colors.red500};
border-radius: 10px;
border: none;
transition: all 0.2s ease-in-out;
cursor: pointer;

&:hover {
  color: ${colors.red500};
  background-color: ${colors.white};
}
`;

export const StyledQRCodeCopied = styled.div`
  position: fixed;
  right: 32px;
  bottom: 32px;
  display: inline-block;
  padding: 16px 32px;
  color: ${colors.white};
  text-align: center;
  border-radius: 4px;
  background-color: ${colors.red500};
`