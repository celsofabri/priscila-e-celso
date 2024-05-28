import React from 'react';
import Header from 'components/Header';
import DresscodeGallery from 'components/DresscodeGallery';
import Helper from 'components/Helper';
import Footer from 'components/Footer';
import {
  BRIDESMAIDS,
  BRIDESMAIDSCOLORS
} from 'assets/global/constants';
import ImgBridesmaids from 'assets/images/ilustra-madrinhas.svg';

const Bridesmaids = () => {
  return (
    <React.Fragment>
      <Header />
      <DresscodeGallery pageTitle="Madrinhas" images={BRIDESMAIDS} />
      <Helper
        label="Guia das Madrinhas"
        description="Olá, madrinha! Tudo bem? Aqui você pode conferir o seu código de vestimenta e algumas referências para ajudar a escolher o seu vestido. E para que esteja linda e confortável em seu papel de madrinha, pedimos que se vista com o seguinte padrão:"
        guide="Utilize um vestido na cor ROSÉ e que seja LONGO E LISO. Fique à vontade para escolher o seu calçado."
        colors={BRIDESMAIDSCOLORS}
        image={ImgBridesmaids}
      />
      <Footer />
    </React.Fragment>
  );
};

export default Bridesmaids;

export const Head = () => (
  <title>Dress Code - Madrinhas | Casamento Priscila & Celso</title>
);
