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
import ImgBridesmaids from 'assets/images/img-madrinhas.jpg';
import ImgGroomsmen from 'assets/images/img-padrinhos.jpg';
import ImgGuests from 'assets/images/img-convidados.jpg';

const DresscodeMenu = () => {
  return (
    <StyledDresscodeMenu>
      <StyledWrapper>
        <StyledDresscodeMenuTitle>
          Dress Code
        </StyledDresscodeMenuTitle>
        <StyledDresscodeMenuContainer>
          <StyledDresscodeMenuItem to="/dresscode/madrinhas">
            <StyledDresscodeMenuImg>
              <img src={ImgBridesmaids} />
            </StyledDresscodeMenuImg>
            <StyledDresscodeMenuBox>
              <StyledDresscodeMenuLabel>
                Madrinhas
              </StyledDresscodeMenuLabel>
            </StyledDresscodeMenuBox>
          </StyledDresscodeMenuItem>
          <StyledDresscodeMenuItem to="/dresscode/padrinhos">
            <StyledDresscodeMenuImg>
              <img src={ImgGroomsmen} />
            </StyledDresscodeMenuImg>
            <StyledDresscodeMenuBox>
              <StyledDresscodeMenuLabel>
                Padrinhos
              </StyledDresscodeMenuLabel>
            </StyledDresscodeMenuBox>
          </StyledDresscodeMenuItem>
          <StyledDresscodeMenuItem to="/dresscode/convidados">
            <StyledDresscodeMenuImg>
              <img src={ImgGuests} />
            </StyledDresscodeMenuImg>
            <StyledDresscodeMenuBox>
              <StyledDresscodeMenuLabel>
                Convidados
              </StyledDresscodeMenuLabel>
            </StyledDresscodeMenuBox>
          </StyledDresscodeMenuItem>
        </StyledDresscodeMenuContainer>
      </StyledWrapper>
    </StyledDresscodeMenu>
  );
};

export default DresscodeMenu;
