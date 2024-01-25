import React from 'react';
import { StyledWrapper } from 'generic';
import {
  StyledFooter,
  StyledFooterContainer,
  StyledFooterLogo,
  StyledFooterMenu,
  StyledFooterCategory,
  StyledFooterList,
  StyledFooterItem,
  StyledFooterAnchor
} from './styled';
import ImgLogo from 'assets/images/priscila-e-celso-logo.svg';

const Footer = () => {

  return (
    <StyledFooter>
      <StyledWrapper>
        <StyledFooterContainer>
        <StyledFooterLogo>
          <img src={ImgLogo} alt="Priscila & Celso" />
        </StyledFooterLogo>
        <StyledFooterMenu>
            <StyledFooterCategory>Casamento</StyledFooterCategory>
            <StyledFooterList>
              <StyledFooterItem>
                <StyledFooterAnchor 
                    href="#"
                    title="Confirme sua presença"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                      Padrinhos & Madrinhas
                  </StyledFooterAnchor>
              </StyledFooterItem>
              <StyledFooterItem>
                <StyledFooterAnchor 
                  href="https://www.casamentos.com.br/web/priscila-e-celso"
                  title="Confirme sua presença"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                    Confirme sua presença
                </StyledFooterAnchor>
              </StyledFooterItem>
              <StyledFooterItem>
                <StyledFooterAnchor 
                  href="https://maps.app.goo.gl/oPGbms49BXQhRNT6A"
                  title="Como chegar no evento?"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                    Como chegar no evento?
                </StyledFooterAnchor>
              </StyledFooterItem>
            </StyledFooterList>
          </StyledFooterMenu>
          <StyledFooterMenu>
            <StyledFooterCategory>Lista de Presentes</StyledFooterCategory>
            <StyledFooterList>
              <StyledFooterItem>
                <StyledFooterAnchor 
                  href="#"
                  title="Camicado"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Camicado
                </StyledFooterAnchor>
              </StyledFooterItem>
              <StyledFooterItem>
                <StyledFooterAnchor 
                  href="#"
                  title="TokStok"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  TokStok
                </StyledFooterAnchor>
              </StyledFooterItem>
              <StyledFooterItem>
                <StyledFooterAnchor 
                  href="#"
                  title="Magazine Luiza"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Magazine Luiza
                </StyledFooterAnchor>
              </StyledFooterItem>
            </StyledFooterList>
          </StyledFooterMenu>
        </StyledFooterContainer>
      </StyledWrapper>
    </StyledFooter>
  );
}

export default Footer;