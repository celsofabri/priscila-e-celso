import React, { useState, useEffect } from 'react';
import Loading from 'components/Loading';
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

const NewHome = () => {
  const [giftsHomePage, setGiftsHomePage] = useState([]);
  const [giftsHome, setGiftsHome] = useState([]);

  const query = `
    {
      pages(id: "3V8zSzcfdnbBJwCdi3heEX") {
        title
        subtitle
        content
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

        const sortedItems = data.newHomeCollection.items.sort((a, b) => {
          return a.sold - b.sold;
        });

        setGiftsHomePage(data.pages);
        setGiftsHome(sortedItems);
      });
  }, [query]);

  if (giftsHome.length === 0 || !giftsHome) {
    return <Loading />;
  }

  return (
    <StyledGifts>
      <StyledGiftsHeader>
        <StyledWrapper>
          <StyledGiftsTitle>{giftsHomePage.title}</StyledGiftsTitle>
          {giftsHomePage.content &&
            (<div>{giftsHomePage.content}</div>)
          }
        </StyledWrapper>
      </StyledGiftsHeader>
      <StyledGiftsContainer>
        <StyledWrapper>
          {giftsHome.map((gift, index) => {
            return (
              <StyledGiftsBox key={index}>
                <StyledGiftsPhoto>
                  <img src={gift?.photo?.url} alt={gift?.title} />
                </StyledGiftsPhoto>
                <StyledGiftsInfo>
                  <StyledGiftsName>{gift?.title}</StyledGiftsName>
                  <StyledGiftsDetails>
                    <Markdown>{gift?.description}</Markdown>
                    <StyledGiftsPrice>
                      R$ {gift?.price}
                    </StyledGiftsPrice>
                  </StyledGiftsDetails>
                  <StyledGiftsAction $unavaliable={gift.sold ? 1 : 0}>
                    {!gift?.sold ? (
                      <a
                        href={gift?.pix}
                        title="Quero dar esse!"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quero dar esse!
                      </a>
                    ) : (
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

export default NewHome;
