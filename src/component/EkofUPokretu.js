import React from 'react';
import Header from './Header';
import Footer from './Footer';
import EkofUPokretuMiddle from './EkofUPokretu_middle.js'; 

class EkofUPokretu extends React.Component {

  render() {
    return (
      <div className="Kontakt">
          <Header />
          <EkofUPokretuMiddle />
          <Footer />
      </div>
      );
  }

}

export default EkofUPokretu;