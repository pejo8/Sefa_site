import React from 'react';
import './../App.css';
import Header from './Header';
import Slideshow from './Slideshow';
import Footer from './Footer';
import MiddleHomepage from './Middle_homepage';

const pathsToImages = ["/slika1.jpg", "/slika2.jpg","/slika3.jpg","/slika4.jpg"];

class Homepage extends React.Component {

  render() {
    return (
      <div className="App">
          <Header />
          <Slideshow images={pathsToImages}/>
          <MiddleHomepage />
          <Footer />
      </div>
      );
  }

}

export default Homepage;