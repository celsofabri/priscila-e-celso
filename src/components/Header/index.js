import React, { useState } from 'react';
import Logo from 'components/Logo';
import Burger from 'components/Burger';
import Menu from 'components/Menu';
import { StyledWrapper } from 'assets/global/styled';
import { StyledHeader } from './styled';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <React.Fragment>
      <StyledHeader>
        <StyledWrapper>
          <Logo />
          <Burger
            isMenuOpen={menuOpen}
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          />
        </StyledWrapper>
      </StyledHeader>
      <Menu isMenuOpen={menuOpen} />
    </React.Fragment>
  );
};

export default Header;
