import React from 'react';
import Header from 'components/Header';
import DresscodeGallery from 'components/DresscodeGallery';
import Footer from 'components/Footer';
import { GUESTS } from 'assets/global/constants';

const Guests = () => {
  return (
    <React.Fragment>
      <Header />
      <DresscodeGallery pageTitle="Convidados" images={GUESTS} />
      <Footer />
    </React.Fragment>
  );
};

export default Guests;

export const Head = () => (
  <title>Dresscode - Convidados | Casamento Priscila & Celso</title>
);
