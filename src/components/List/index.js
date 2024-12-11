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
  StyledQRCodeImg,
  StyledQRCodeButton,
  StyledQRCodeCopied
} from './styled';
import ImgQrCode from 'assets/images/img-qrcode.jpg';

const List = ({ data }) => {
  const [giftsListPage, setGiftsListPage] = useState({});
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

  const QRCodeClipboard = "00020126330014BR.GOV.BCB.PIX0111072010139555204000053039865802BR5918Celso Fabri Junior6009SAO PAULO62140510wk9NRzNRhO63044045";
  const [copySuccess, setCopySuccess] = useState("");

  const copyText = () => {
    navigator.clipboard.writeText(QRCodeClipboard)
      .then(() => {
        setCopySuccess("Texto copiado com sucesso!");
        setTimeout(() => setCopySuccess(""), 3000);
      })
      .catch((err) => {
        console.error("Falha ao copiar o texto: ", err);
        setCopySuccess("Erro ao copiar o texto.");
      });
  };

  useEffect(() => {
    window
      .fetch(
        `https://graphql.contentful.com/content/v1/spaces/bz9d56pnav45/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer OhHLk8PiunfsccpMwzamwzaCPvAA0f0tskhYWoWEoZk'
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
          <StyledGiftsSubtitle>{giftsListPage.subtitle}</StyledGiftsSubtitle>
        </StyledGiftsHeader>
        <StyledGiftsContent>{giftsListPage.content}</StyledGiftsContent>
        <StyledBlock>
          <StyledList>
            {stores.map((store, index) => (
              <StyledListItem key={index}>
                <StyledListAnchor 
                  href={store.url}
                  title={store.name}
                  target={store.target ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                >
                  {store.name}
                </StyledListAnchor>
              </StyledListItem>
            ))}
          </StyledList>
          <StyledQRCode>
            <h3>Use o QR Code do Pix para pagar</h3>
            <p>Abra o app em que vai fazer a transferência, escaneie a imagem ou cole o código do QR Code</p>
            <StyledQRCodeImg src={ImgQrCode} alt="QR Code para PIX" />
            <StyledQRCodeButton onClick={copyText}>Copiar código do QR Code</StyledQRCodeButton>
            {copySuccess && <StyledQRCodeCopied>{copySuccess}</StyledQRCodeCopied>}
          </StyledQRCode>
        </StyledBlock>
      </StyledWrapper>
    </StyledGifts>
  );
};

export default List;
