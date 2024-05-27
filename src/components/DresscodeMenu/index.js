import React from 'react';
import { StyledWrapper } from 'assets/global/styled';
import {
  StyledDresscodeMenu,
  StyledDresscodeMenuTitle,
  StyledDresscodeMenuContainer,
  StyledDresscodeMenuItem,
  StyledDresscodeMenuImg,
  StyledDresscodeMenuBox,
  StyledDresscodeMenuLabel
} from './styled';
import ImgBridesmaids from 'assets/images/ilustra-madrinhas.svg';
import ImgGroomsmen from 'assets/images/ilustra-padrinhos.svg';
import ImgGuests from 'assets/images/ilustra-convidados.png';

const DresscodeMenu = () => {
  return (
    <StyledDresscodeMenu>
      <StyledWrapper>
        <StyledDresscodeMenuTitle>
          Dress Code (Código de Vestimenta)
        </StyledDresscodeMenuTitle>
        <StyledDresscodeMenuContainer>
          <StyledDresscodeMenuItem to="/dresscode/madrinhas">
            <StyledDresscodeMenuImg>
              <img src={ImgBridesmaids} />
            </StyledDresscodeMenuImg>
            <StyledDresscodeMenuBox>
              <StyledDresscodeMenuLabel>Madrinhas</StyledDresscodeMenuLabel>
            </StyledDresscodeMenuBox>
          </StyledDresscodeMenuItem>
          <StyledDresscodeMenuItem to="/dresscode/padrinhos">
            <StyledDresscodeMenuImg>
              <img src={ImgGroomsmen} />
            </StyledDresscodeMenuImg>
            <StyledDresscodeMenuBox>
              <StyledDresscodeMenuLabel>Padrinhos</StyledDresscodeMenuLabel>
            </StyledDresscodeMenuBox>
          </StyledDresscodeMenuItem>
          <StyledDresscodeMenuItem to="/dresscode/convidados">
            <StyledDresscodeMenuImg>
              <img src={ImgGuests} />
            </StyledDresscodeMenuImg>
            <StyledDresscodeMenuBox>
              <StyledDresscodeMenuLabel>Convidados</StyledDresscodeMenuLabel>
            </StyledDresscodeMenuBox>
          </StyledDresscodeMenuItem>
        </StyledDresscodeMenuContainer>
      </StyledWrapper>
    </StyledDresscodeMenu>
  );
};

export default DresscodeMenu;
