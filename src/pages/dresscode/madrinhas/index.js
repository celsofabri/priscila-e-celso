import React from 'react';
import Header from 'components/Header';
import DresscodeGallery from 'components/DresscodeGallery';
import Footer from 'components/Footer';
import BRIDESMAIDS from './constants';

const Bridesmaids = () => {
  
  return (
    <React.Fragment>
      <Header />
      <DresscodeGallery images={BRIDESMAIDS} />
      <Footer />
    </React.Fragment>
  );
};

export default Bridesmaids;

export const Head = () => (
  <title>Dresscode - Madrinhas | Casamento Priscila & Celso</title>
);
