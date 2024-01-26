import React from 'react';
import Header from 'components/Header';
import Story from 'components/Story';
import Footer from 'components/Footer';

const OurStory = () => {
  return (
    <React.Fragment>
      <Header />
      <Story />
      <Footer />
    </React.Fragment>
  );
};

export default OurStory;

export const Head = () => <title>Nossa História | Casamento Priscila & Celso</title>;