import React from 'react';
import Header from 'components/Header';
import People from 'components/People';
import Footer from 'components/Footer';

const GroomsmenAndBridesmaids = () => {
  return (
    <React.Fragment>
      <Header />
      <People />
      <Footer />
    </React.Fragment>
  );
};

export default GroomsmenAndBridesmaids;

export const Head = () => (
  <title>Padrinhos & Madrinhas | Casamento Priscila & Celso</title>
);
