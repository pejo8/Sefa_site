import React from 'react';
import './../css/ONama.css';
import Header from './Header';
import Footer from './Footer';
import MiddleONama from './MiddleONama';

class ONama extends React.Component {

  render() {
    return (
      <div className="ONama">
          <Header />
          <MiddleONama />
          <Footer />
      </div>
      );
  }

}

export default ONama;