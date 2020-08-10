import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MiddleTimovi from './Middle_timovi'

class LjudskiResursi extends React.Component {

  render() {
    return (
      <div className="Timovi">
          <Header />
          <MiddleTimovi title="LjUDSKI RESURSI"/>
          <Footer />
      </div>
      );
  }

}

export default LjudskiResursi;