import React from 'react';
import { Link } from 'gatsby'
import { StyledWrapper } from 'generic';
import {
  StyledMenu,
  StyledMenuList,
  StyledMenuItem,
  StyledMenuAnchor
} from './styled';

const Menu = ({ isMenuOpen }) => {

  return (
    <StyledMenu isMenuOpen={isMenuOpen}>
      <StyledWrapper>
        <StyledMenuList>
          <StyledMenuItem>
            <StyledMenuAnchor href="/">Home</StyledMenuAnchor>
          </StyledMenuItem>
          <StyledMenuItem>
            <StyledMenuAnchor href="/padrinhos-e-madrinhas">Padrinhos & Madrinhas</StyledMenuAnchor>
          </StyledMenuItem>
          <StyledMenuItem>
            <StyledMenuAnchor href="#">Menu 3</StyledMenuAnchor>
          </StyledMenuItem>
        </StyledMenuList>
      </StyledWrapper>
    </StyledMenu>
  )
}

export default Menu;