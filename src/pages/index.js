import React, { useState, useEffect } from 'react';
import HeaderSimple from 'components/HeaderSimple';
import Banner from 'components/Banner';
import Schedule from 'components/Schedule';
import Timer from 'components/Timer';
import RSVP from 'components/RSVP';
import Address from 'components/Address';
import Footer from 'components/Footer';

const Home = () => {

  return (
    <React.Fragment>
      <HeaderSimple />
      <Banner />
      <Schedule/>
      <Timer/>
      <RSVP/>
      <Address/>
      <Footer/>
    </React.Fragment>
  );
};

export default Home;

export const Head = () => <title>Casamento Priscila & Celso</title>;
