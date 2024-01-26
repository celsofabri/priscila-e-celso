import React from 'react';
import Header from 'components/Header';
import Gifts from 'components/Gifts';
import Footer from 'components/Footer';

const HoneyMoon = () => {
  return (
    <React.Fragment>
      <Header />
      <Gifts />
      <Footer />
    </React.Fragment>
  );
};

export default HoneyMoon;

export const Head = () => <title>Lua de Mel | Casamento Priscila & Celso</title>;