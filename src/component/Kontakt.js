import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MiddleKontakt from './Middle_kontakt';

class Kontakt extends React.Component {

  render() {
    return (
      <div className="Kontakt">
          <Header />
          <MiddleKontakt />
          <Footer />
      </div>
      );
  }

}

export default Kontakt;