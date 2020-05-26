import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MiddleSportBusinessDay from './Middle_SportBusinessDay';

class SportBusinessDay extends React.Component {

  render() {
    return (
      <div className="projekat">
          <Header />
          
          <MiddleSportBusinessDay />
          <Footer />
      </div>
      );
  }

}

export default SportBusinessDay;