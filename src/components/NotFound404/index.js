import React from 'react';
import { StyledWrapper } from 'assets/global/styled';
import {
  StyledNotFound404,
  StyledNotFound404Title,
  StyledNotFound404Subtitle,
  StyledNotFound404Content,
} from './styled';

const NotFound404 = () => {

  return (
    <StyledNotFound404>
      <StyledWrapper>
        <StyledNotFound404Title>404</StyledNotFound404Title>
        <StyledNotFound404Subtitle>Página não encontrada</StyledNotFound404Subtitle>
        <StyledNotFound404Content>
          <p>Ooops, a página que você digitou não existe. Verifique se foi digitado corretamente o endereço ou tente novamente.</p>
          <a
            href="/"
            rel="noopener noreferrer"
          >
            Voltar para página inicial
          </a>
        </StyledNotFound404Content>
      </StyledWrapper>
    </StyledNotFound404>
  )
}

export default NotFound404;