import React, { useState, useEffect } from 'react';
import Loading from 'components/Loading';
import { StyledWrapper } from 'assets/global/styled';
import { 
  StyledGifts, 
  StyledGiftsHeader,
  StyledGiftsTitle,
  StyledGiftsSubtitle,
  StyledList, 
  StyledListItem, 
  StyledListAnchor,
  StyledListImg
} from './styled';
import ImgCamicado from 'assets/images/logo-camicado.png';
import ImgTokeStok from 'assets/images/logo-tokestok.png';
import ImgMagalu from 'assets/images/logo-magalu.png';
import ImgFastShop from 'assets/images/logo-fastshop.png';
import ImgPix from 'assets/images/logo-pix.png';

const List = ({ data }) => {
  const [giftsListPage, setGiftsListPage] = useState([]);
  const [stores, setStores] = useState([]);
  const query = `
    {
      pages(id: "364fWjLmB9ZmiwFMGzJjww") {
        title
        subtitle
        content
      }
      storesCollection {
        items {
          name
          url
          target
          logo {
            url
          }
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

        setGiftsListPage(data.pages);
        setStores(data.storesCollection.items)
      });
  }, [query]);

  if (stores.length === 0 || !stores) {
    return <Loading />;
  }

  return (
    <StyledGifts>
      <StyledWrapper>
        <StyledGiftsHeader>
          <StyledGiftsTitle>{giftsListPage.title}</StyledGiftsTitle>
          <StyledGiftsSubtitle>
            {giftsListPage.subtitle}
          </StyledGiftsSubtitle>
        </StyledGiftsHeader>
        <StyledList>
          {stores.map((store, index) => {

            return (
              <StyledListItem>
                <StyledListAnchor href={store.url} title={store.name} target={store.target ? '_blank' : '_self'} rel="noopener noreferrer">
                  <StyledListImg src={store.logo.url} alt={store.name}/>
                </StyledListAnchor>
              </StyledListItem>
            )
          })}
        </StyledList>
      </StyledWrapper>
    </StyledGifts>
  )
}

export default List;