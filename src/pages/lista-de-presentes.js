import React from 'react';
import Header from 'components/Header';
import List from 'components/List';
import Footer from 'components/Footer';

const GiftsList = () => {
  return (
    <React.Fragment>
      <Header />
      <List />
      <Footer />
    </React.Fragment>
  );
};

export default GiftsList;

export const Head = () => <title>Nossa História | Casamento Priscila & Celso</title>;