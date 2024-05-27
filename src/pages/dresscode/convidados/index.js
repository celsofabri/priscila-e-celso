import React from 'react';
import Header from 'components/Header';
import DresscodeGallery from 'components/DresscodeGallery';
import Helper from 'components/Helper';
import Footer from 'components/Footer';
import { GUESTS, GUESTSCOLORS } from 'assets/global/constants';

const Guests = () => {
  return (
    <React.Fragment>
      <Header />
      <DresscodeGallery pageTitle="Convidados" images={GUESTS} />
      <Helper
        label="Guia dos Convidados"
        description="Olá, convidado(a)! Tudo bem? Aqui você pode encontrar algumas inspirações para definir seu traje/vestido. Queremos que vocês se sintam confortáveis no nosso dia."
        guide="Para mulheres, dêem preferência para vestidos longos e evitem a cor rosé que será utilizada pelas madrinhsa. Para homens, dêem preferência para trajes esporte fino e evitem utilizar terno cinza com tênis branco que serão utilizados pelos padrinhos. As cores para serem evitadas segue os seguintes tons:"
        colors={GUESTSCOLORS}
      />
      <Footer />
    </React.Fragment>
  );
};

export default Guests;

export const Head = () => (
  <title>Dresscode - Convidados | Casamento Priscila & Celso</title>
);
