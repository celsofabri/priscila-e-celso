import React from 'react';
import Header from 'components/Header';
import GiftsHome from 'components/GiftsHome';
import Footer from 'components/Footer';

const ForOurHome = () => {
  return (
    <React.Fragment>
      <Header />
      <GiftsHome />
      <Footer />
    </React.Fragment>
  );
};

export default ForOurHome;

export const Head = () => (
  <title>Para Nossa Casa | Casamento Priscila & Celso</title>
);
