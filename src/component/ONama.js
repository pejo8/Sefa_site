import React from 'react';
import './../css/ONama.css';
import Header from './Header';
import Footer from './Footer';

class ONama extends React.Component {

  render() {
    return (
      <div className="ONama">
          <Header />
          <Footer />
      </div>
      );
  }

}

export default ONama;