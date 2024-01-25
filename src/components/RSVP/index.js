import React from 'react';
import { StyledWrapper } from 'assets/global/styled';
import {
  StyledRSVP,
  StyledRSVPHeader,
  StyledRSVPTitle,
  StyledRSVPContent
} from './styled';

const RSVP = () => {
  return (
    <StyledRSVP>
      <StyledWrapper>
        <StyledRSVPHeader>
          <StyledRSVPTitle>Confirme sua presença!</StyledRSVPTitle>
        </StyledRSVPHeader>
        <StyledRSVPContent>
          <p>
            Para confirmar a sua presença no casamento, clique no link
            abaixo para abrir a tela de confirmação, escreva o seu
            nome no campo indicado e clique em Pesquisar. Em seguida,
            aparecerá o seu nome e você só terá que dizer se estará ou
            não no casamento (deixar a mensagem é opcional, mas sempre
            adoramos receber uma) :)
          </p>

          <a
            href="https://www.casamentos.com.br/web/priscila-e-celso"
            target="_blank"
            rel="noopener noreferrer"
          >
            Confirme sua presença
          </a>
        </StyledRSVPContent>
      </StyledWrapper>
    </StyledRSVP>
  );
};

export default RSVP;
