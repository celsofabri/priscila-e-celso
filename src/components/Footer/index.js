import React, { useState, useEffect } from 'react';
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
  const [people, setPeople] = useState([]);
  const [gifts, setGifts] = useState([]);
  const query = `
  {
      groomsmenAndBridesmaidsCollection {
        items {
          name
          description
          photo {
            url
          }
        }
      }
      giftsCollection {
        items {
          title
          description
          photo {
            url
          },
          price,
          sold,
          pix
        }
      }
    }
  `;

  useEffect(() => {
    window
      .fetch(
        `https://graphql.contentful.com/content/v1/spaces/bz9d56pnav45/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer OhHLk8PiunfsccpMwzamwzaCPvAA0f0tskhYWoWEoZk'
          },
          body: JSON.stringify({ query })
        }
      )
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        setPeople(data.groomsmenAndBridesmaidsCollection.items);
        setGifts(data.giftsCollection.items);
      });
  }, [query]);

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
                >
                  Nossa História
                </StyledFooterAnchor>
              </StyledFooterItem>
              <StyledFooterItem>
                <StyledFooterAnchor
                  href="/familia"
                  title="Família"
                >
                  Nossa Família
                </StyledFooterAnchor>
              </StyledFooterItem>
              {people.length > 0 && (
                <StyledFooterItem>
                  <StyledFooterAnchor
                    href="/padrinhos-e-madrinhas"
                    title="Padrinhos & Madrinhas"
                  >
                    Padrinhos & Madrinhas
                  </StyledFooterAnchor>
                </StyledFooterItem>
              )}
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
              {gifts.length > 0 && (
                <StyledFooterItem>
                  <StyledFooterAnchor
                    href="/lua-de-mel"
                    title="Lua de Mel"
                  >
                    Lua de Mel
                  </StyledFooterAnchor>
                </StyledFooterItem>
              )}
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
