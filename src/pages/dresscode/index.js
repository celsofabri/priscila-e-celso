import React from 'react';
import Header from 'components/Header';
import DresscodeMenu from 'components/DresscodeMenu';
import Footer from 'components/Footer';

const Dresscode = () => {
  return (
    <React.Fragment>
      <Header />
      <DresscodeMenu />
      <Footer />
    </React.Fragment>
  );
};

export default Dresscode;

export const Head = () => (
  <title>Dresscode | Casamento Priscila & Celso</title>
);
