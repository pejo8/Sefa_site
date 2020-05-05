import React from 'react';
import './../App.css';
import Header from './Header';
import Slideshow from './Slideshow';
import Footer1 from './Footer1';
import MiddleHomepage from './Middle_homepage';

const pathsToImages = ["/slika1.jpg", "/slika2.jpg","/slika3.jpg","/slika4.jpg"];

class Homepage extends React.Component {

  render() {
    return (
      <div className="App">
          <Header />
          <Slideshow images={pathsToImages}/>
          <MiddleHomepage />
          <Footer1 />
      </div>
      );
  }

}

export default Homepage;