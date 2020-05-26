import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MiddleProjekti from './Middle_projekti';

class Projekat extends React.Component {

  render() {
    return (
      <div className="projekat">
          <Header />
          
          <MiddleProjekti />
          <Footer />
      </div>
      );
  }

}

export default Projekat;