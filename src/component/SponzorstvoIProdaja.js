import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MiddleTimovi from './Middle_timovi'

class SponzorstvoIProdaja extends React.Component {

  render() {
    return (
      <div className="Timovi">
          <Header />
          <MiddleTimovi title="SPONZORSTVO I PRODAJA"/>
          <Footer />
      </div>
      );
  }

}

export default SponzorstvoIProdaja;