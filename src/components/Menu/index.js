import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
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
    <StyledMenu open={open}>
      <StyledWrapper>
        <StyledMenuList>
          <StyledMenuItem>
            <StyledMenuAnchor href="/">Home</StyledMenuAnchor>
          </StyledMenuItem>
          <StyledMenuItem>
            <StyledMenuAnchor href="/nossa-historia">
              Nossa História
            </StyledMenuAnchor>
          </StyledMenuItem>
          {people.length > 0 && (
            <StyledMenuItem>
              <StyledMenuAnchor href="/padrinhos-e-madrinhas">
                Padrinhos & Madrinhas
              </StyledMenuAnchor>
            </StyledMenuItem>
          )}
          {gifts.length > 0 && (
            <StyledMenuItem>
              <StyledMenuAnchor href="/lua-de-mel">
                Lua de Mel
              </StyledMenuAnchor>
            </StyledMenuItem>
          )}
        </StyledMenuList>
      </StyledWrapper>
    </StyledMenu>
  );
};

export default Menu;
