import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';

const NotFound = () => {
  return (
    <React.Fragment>
      <Header />
      <h2>404</h2>
      <p>Ooops, página não encontrada.</p>
      <Footer />
    </React.Fragment>
  );
};

export default NotFound;

export const Head = () => <title>Página não encontrada | Casamento Priscila & Celso</title>;