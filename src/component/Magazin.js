import React from 'react';
import './../css/Magazin.css';
import Header from './Header';
import Footer from './Footer';

class Magazin extends React.Component {

  render() {
    return (
      <div className="Magazin">
          <Header />
          <Footer />
      </div>
      );
  }

}

export default Magazin;