import React, { useState, useEffect } from 'react';
import Loading from 'components/Loading';
import { StyledWrapper } from 'assets/global/styled';
import {
  StyledGifts,
  StyledGiftsHeader,
  StyledGiftsTitle,
  StyledGiftsSubtitle,
  StyledGiftsContent,
  StyledBlock,
  StyledList,
  StyledListItem,
  StyledListAnchor,
  StyledQRCode,
  StyledQRCodeImg
} from './styled';
import ImgQrCode from 'assets/images/img-qrcode.jpg'

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
        setStores(data.storesCollection.items);
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
        <StyledGiftsContent>
          {giftsListPage.content}
        </StyledGiftsContent>
        <StyledBlock>
          <StyledList>
          {stores.map((store, index) => {
            return(
              <StyledListItem>
                <StyledListAnchor 
                  href={store.url}
                  title={store.name}
                  target={store.target ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                >
                  {store.name}
                </StyledListAnchor>
              </StyledListItem>
            )
          })}
          </StyledList>
          <StyledQRCode>
            <h3>Use o QR Code do Pix para pagar</h3>
            <p>Abra o app em que vai fazer a transferência, escaneie a imagem ou cole o código do QR Code</p>
            <StyledQRCodeImg src={ImgQrCode} alt="QR Code para PIX" />
            <SytledQRCodeButton>Copiar código do QR Code</SytledQRCodeButton>
          </StyledQRCode>
        </StyledBlock>
      </StyledWrapper>
    </StyledGifts>
  );
};

export default List;
