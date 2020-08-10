import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MiddleTimovi from './Middle_timovi'

class SavetodavnoTelo extends React.Component {

  render() {
    return (
      <div className="Timovi">
          <Header />
          <MiddleTimovi title="SAVETODAVNO TELO"/>
          <Footer />
      </div>
      );
  }

}

export default SavetodavnoTelo;