import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MiddleTimovi from './Middle_timovi'

class UpravljanjeProjektima extends React.Component {

  render() {
    return (
      <div className="Timovi">
          <Header />
          <MiddleTimovi title="UPRAVLJANJE PROJEKTIMA"/>
          <Footer />
      </div>
      );
  }

}

export default UpravljanjeProjektima;