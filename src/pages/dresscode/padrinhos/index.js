import React from 'react';
import Header from 'components/Header';
import DresscodeGallery from 'components/DresscodeGallery';
import Helper from 'components/Helper';
import Footer from 'components/Footer';
import { GROOMSMEN, GROOMSMENCOLORS } from 'assets/global/constants';
import ImgGroomsmen from 'assets/images/ilustra-padrinhos.svg';

const Groomsmen = () => {
  return (
    <React.Fragment>
      <Header />
      <DresscodeGallery pageTitle="Padrinhos" images={GROOMSMEN} />
      <Helper
        label="Guia dos Padrinhos"
        description="Olá, padrinho! Tudo bem? Aqui você pode conferir o seu código de vestimenta e algumas referências para ajudar a escolher o traje. E para que esteja elagante e confortável em seu papel de padrinho, pedimos que se vista com o seguinte padrão:"
        guide="Utilize um terno na cor CINZA, CAMISA BRANCA SEM GRAVATA e TÊNIS BRANCO."
        colors={GROOMSMENCOLORS}
        image={ImgGroomsmen}
      />
      <Footer />
    </React.Fragment>
  );
};

export default Groomsmen;

export const Head = () => (
  <title>Dresscode - Padrinhos | Casamento Priscila & Celso</title>
);
