import React from 'react';
import { Link } from 'gatsby';
import { StyledWrapper } from 'assets/global/styled';
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
            <Link to="/" title="Priscila & Celso">
              <img src={ImgLogo} alt="Priscila & Celso" />
            </Link>
          </StyledFooterLogo>
          <StyledFooterMenu>
            <StyledFooterCategory>Casamento</StyledFooterCategory>
            <StyledFooterList>
              <StyledFooterItem>
                <StyledFooterAnchor
                  href="/nossa-historia"
                  title="Nossa História"
                  rel="noopener noreferrer"
                >
                  Nossa História
                </StyledFooterAnchor>
              </StyledFooterItem>
              <StyledFooterItem>
                <StyledFooterAnchor
                  href="/padrinhos-e-madrinhas"
                  title="Padrinhos & Madrinhas"
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
            <StyledFooterCategory>
              Lista de Presentes
            </StyledFooterCategory>
            <StyledFooterList>
            <StyledFooterItem>
                <StyledFooterAnchor
                  href="/lua-de-mel"
                  title="Lua de Mel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lua de Mel
                </StyledFooterAnchor>
              </StyledFooterItem>
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
};

export default Footer;
