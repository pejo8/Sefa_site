import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MiddleBudiDeoSefa from './MiddleBudiDeoSefa';

class BudiDeoSefa extends React.Component {

  render() {
    return (
      <div className="Kontakt">
          <Header />
          <MiddleBudiDeoSefa />
          <Footer />
      </div>
      );
  }

}

export default BudiDeoSefa;