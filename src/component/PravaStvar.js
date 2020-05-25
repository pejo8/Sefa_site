import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PravaStvarMiddle from './PravaStvar_middle.js'; 

class PravaStvar extends React.Component {

  render() {
    return (
      <div className="Kontakt">
          <Header />
          <PravaStvarMiddle />
          <Footer />
      </div>
      );
  }

}

export default PravaStvar;