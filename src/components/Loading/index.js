import React from 'react';
import { StyledLoading } from './styled';
import ImgLogo from 'assets/images/priscila-e-celso-logo.svg';

const Loading = () => {
  return (
    <StyledLoading>
      <img src={ImgLogo} alt="Priscila & Celso - Carregando..." />
    </StyledLoading>
  );
};

export default Loading;
