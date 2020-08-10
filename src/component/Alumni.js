import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MiddleTimovi from './Middle_timovi'

class Alumni extends React.Component {

  render() {
    return (
      <div className="Timovi">
          <Header />
          <MiddleTimovi title="ALUMNI"/>
          <Footer />
      </div>
      );
  }

}

export default Alumni;