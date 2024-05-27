import React from 'react';
import Header from 'components/Header';
import DresscodeGallery from 'components/DresscodeGallery';
import Footer from 'components/Footer';
import GROOMSMEN from './constants';

const Groomsmen = () => {
  return (
    <React.Fragment>
      <Header />
      <DresscodeGallery pageTitle="Padrinhos" images={GROOMSMEN} />
      <Footer />
    </React.Fragment>
  );
};

export default Groomsmen;

export const Head = () => (
  <title>Dresscode - Padrinhos | Casamento Priscila & Celso</title>
);
