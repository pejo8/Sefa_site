import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MiddleTimovi from './Middle_timovi'

class Timovi extends React.Component {

  render() {
    return (
      <div className="Timovi">
          <Header />
          <MiddleTimovi title="KOMUNIKACIJE"/>
          <Footer />
      </div>
      );
  }

}

export default Timovi;