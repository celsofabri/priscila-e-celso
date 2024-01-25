import React from 'react';
import { Link } from 'gatsby'
import { StyledLogo } from './styled';
import ImgLogo from 'assets/images/priscila-e-celso-logo.svg';

const Logo = () => {

  return (
    <StyledLogo>
      <Link to="/" title="Priscila & Celso">
        <img src={ImgLogo} alt="Priscila & Celso" />
      </Link>
    </StyledLogo>
  )
}

export default Logo;