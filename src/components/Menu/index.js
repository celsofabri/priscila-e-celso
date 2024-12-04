import React, { useState, useEffect } from 'react';
import { StyledWrapper } from 'assets/global/styled';
import {
  StyledMenu,
  StyledMenuList,
  StyledMenuItem,
  StyledMenuAnchor
} from './styled';

const Menu = ({ open }) => {
  const [people, setPeople] = useState([]);
  const [gifts, setGifts] = useState([]);
  const [giftsHome, setGiftsHome] = useState([]);
  const [family, setFamily] = useState([]);
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
      newHomeCollection {
        items {
          title
          photo {
            url
          },
          price,
          sold,
          pix
        }
      }
      familyCollection {
        items {
          name
          relationship
          photo {
            url
          }
          details
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
        setGiftsHome(data.newHomeCollection.items);
        setFamily(data.familyCollection.items);
      });
  }, [query]);

  return (
    <StyledMenu open={open}>
      <StyledWrapper>
        <StyledMenuList>
          <StyledMenuItem>
            <StyledMenuAnchor to="/">Home</StyledMenuAnchor>
          </StyledMenuItem>
          <StyledMenuItem>
            <StyledMenuAnchor to="/nossa-historia">
              Nossa História
            </StyledMenuAnchor>
          </StyledMenuItem>
          {family.length > 0 && (
            <StyledMenuItem>
              <StyledMenuAnchor to="/familia">
                Nossa Família
              </StyledMenuAnchor>
            </StyledMenuItem>
          )}
          {people.length > 0 && (
            <StyledMenuItem>
              <StyledMenuAnchor to="/padrinhos-e-madrinhas">
                Padrinhos & Madrinhas
              </StyledMenuAnchor>
            </StyledMenuItem>
          )}
          <StyledMenuItem>
            <StyledMenuAnchor to="/dresscode">
              Dress Code
            </StyledMenuAnchor>
          </StyledMenuItem>
          <StyledMenuItem>
            <StyledMenuAnchor to="/lista-de-presentes">
              Lista de Presentes
            </StyledMenuAnchor>
          </StyledMenuItem>
        </StyledMenuList>
      </StyledWrapper>
    </StyledMenu>
  );
};

export default Menu;
