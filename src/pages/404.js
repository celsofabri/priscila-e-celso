import React from 'react';
import Header from 'components/Header';
import NotFound404 from 'components/NotFound404';
import Footer from 'components/Footer';

const NotFound = () => {
  return (
    <React.Fragment>
      <Header />
      <NotFound404 />
      <Footer />
    </React.Fragment>
  );
};

export default NotFound;

export const Head = () => (
  <title>Página não encontrada | Casamento Priscila & Celso</title>
);
