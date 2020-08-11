import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MiddleBezStraha from './Middle_BezStraha';

class BezStraha extends React.Component {

  render() {
    return (
      <div className="bezStraha">
          <Header />
          <MiddleBezStraha />
          <Footer />
      </div>
      );
  }

}

export default BezStraha;