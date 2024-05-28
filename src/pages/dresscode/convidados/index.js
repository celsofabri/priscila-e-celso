import React from 'react';
import Header from 'components/Header';
import DresscodeGallery from 'components/DresscodeGallery';
import Helper from 'components/Helper';
import Footer from 'components/Footer';
import { GUESTS, GUESTSCOLORS } from 'assets/global/constants';
import ImgGuests from 'assets/images/ilustra-convidados.png';

const Guests = () => {
  return (
    <React.Fragment>
      <Header />
      <DresscodeGallery pageTitle="Convidados" images={GUESTS} />
      <Helper
        label="Guia dos Convidados"
        description="Olá, convidado(a)! Tudo bem? Aqui você pode encontrar algumas inspirações para definir seu traje/vestido. Queremos que vocês se sintam confortáveis no nosso dia."
        guide="Para mulheres, dêem preferência para vestidos longos e EVITEM a cor BRANCA da noiva e ROSÉ que será utilizada pelas MADRINHAS. Para homens, dêem preferência para trajes ESPORTE FINO e EVITEM utilizar terno AZUL do noivo e CINZA COM TÊNIS BRANCO que serão utilizados pelos PADRINHOS. A paleta de cores para serem EVITADAS segue os seguintes tons:"
        colors={GUESTSCOLORS}
        image={ImgGuests}
      />
      <Footer />
    </React.Fragment>
  );
};

export default Guests;

export const Head = () => (
  <title>Dress Code - Convidados | Casamento Priscila & Celso</title>
);
