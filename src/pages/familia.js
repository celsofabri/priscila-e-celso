import React from 'react';
import Header from 'components/Header';
import Family from 'components/Family';
import Footer from 'components/Footer';

const OurFamily = () => {
  return (
    <React.Fragment>
      <Header />
      <Family />
      <Footer />
    </React.Fragment>
  );
};

export default OurFamily;

export const Head = () => <title>Nossa História | Casamento Priscila & Celso</title>;