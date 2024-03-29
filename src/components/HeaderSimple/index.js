import React, { useState } from 'react';
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
          <Burger
            open={menuOpen}
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          />
        </StyledWrapper>
      </StyledHeader>
      <Menu open={menuOpen} />
    </React.Fragment>
  );
};

export default Header;
