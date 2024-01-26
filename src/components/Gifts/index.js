import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import { StyledWrapper } from 'assets/global/styled';
import {
  StyledGifts,
  StyledGiftsHeader,
  StyledGiftsTitle,
  StyledGiftsContainer,
  StyledGiftsBox,
  StyledGiftsPhoto,
  StyledGiftsInfo,
  StyledGiftsName,
  StyledGiftsDetails,
  StyledGiftsPrice,
  StyledGiftsAction
} from './styled';

const Gifts = () => {
  const [gifts, setGifts] = useState([]);
  const query = `
  {
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

        setGifts(data.giftsCollection.items);
      });
  }, [query]);

  if (gifts.length === 0 || !gifts) {
    return 'Carregando...';
  }

  return (
    <StyledGifts>
      <StyledGiftsHeader>
        <StyledWrapper>
          <StyledGiftsTitle>Lua de Mel</StyledGiftsTitle>
        </StyledWrapper>
      </StyledGiftsHeader>
      <StyledGiftsContainer>
        <StyledWrapper>
          {gifts.map((gift, index) => {
            return (
              <StyledGiftsBox key={index}>
                <StyledGiftsPhoto>
                  <img src={gift?.photo?.url} alt={gift?.title} />
                </StyledGiftsPhoto>
                <StyledGiftsInfo>
                  <StyledGiftsName>{gift?.title}</StyledGiftsName>
                  <StyledGiftsDetails>
                    <Markdown>{gift?.description}</Markdown>
                    <StyledGiftsPrice>R$ {gift?.price}</StyledGiftsPrice>
                  </StyledGiftsDetails>
                  <StyledGiftsAction unavaliable={gift?.sold}>
                    {!gift?.sold ? (
                      <a 
                        href={gift?.pix} 
                        title="Quero dar esse!"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quero dar esse!
                      </a>
                    ): (
                      <a 
                        href="#" 
                        title="Não disponível" 
                        disabled="disabled"
                      >
                        Não disponível
                      </a>
                    )}
                    
                  </StyledGiftsAction>
                </StyledGiftsInfo>
              </StyledGiftsBox>
            );
          })}
        </StyledWrapper>
      </StyledGiftsContainer>
    </StyledGifts>
  );
};

export default Gifts;
