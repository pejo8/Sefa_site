import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Middle_homepage.css';

var image = ["/slika1.jpg","/slika2.jpg","/slika3.jpg","/slika4.jpg"];
var i = image.length;
var slider_content = [<a key={i} href="/"> <img src= {image[i-1]} alt='project' /> </a>];

class Middle_homepage extends Component {

    componentDidMount() {
        this.setState({brojac:i});
    }

    nextImage() {
        if(i < image.length){
            i = i+1;
        } else{
            i = 1;
        }
        slider_content = [<a href="/"> <img src= {image[i-1]} alt='project' /> </a>]
        this.setState({brojac:i});
    }

    prewImage() {
        if(i > 1){
            i = i-1;
        } else{
            i = image.length;
        }
        slider_content = [<a href="/"> <img src= {image[i-1]} alt='project' /> </a>]
        this.setState({brojac:i});
    }

render() {

  return (
    <div className="middle">
        <div className ="baner">
            <img src="/sefa_baner.jpg" alt="baner" className="baner_img"/>
        </div>

        <div className="middle_projekti">
            <div>
                <p> Naši projekti. </p>
            </div>
            <div className="projekti">
                <div>
                    <button> <img src="/slika1.jpg" alt="project" title="aaa"></img> </button>
                    <button> <img src="/slika2.jpg" alt="project"></img> </button>
                </div>
                <div>
                    <button> <img className="img_mp" src="/slika3.jpg" alt="project"></img> </button>
                </div>
                <div>
                    <button> <img src="/slika4.jpg" alt="project"></img> </button>
                    <button> <img src="/slika1.jpg" alt="project"></img> </button>
                </div>
            </div>
        </div>

        <div className="projekti_response">
                <p> Naši projekti </p>
                <div id="box">
                    {slider_content}
                </div>
                <button className="prew" onClick={this.prewImage.bind(this)}> {"<"} </button>
                <button className="next" onClick={this.nextImage.bind(this)}> > </button>
            </div>

        <div className="partneri">
            <div className="partneri_tekst">
                <div className="tekst_nasi"> <p> NAŠI </p> </div>
                <div className="tekst_partneri"> <p> PARTNERI </p> </div>
            </div>
            <div className="partneri_logovi">
                <button> <img src="/partner1.png" alt="partner_logo" /> </button>
                <button> <img src="/partner2.png" alt="partner_logo" /> </button>
                <button> <img src="/partner3.png" alt="partner_logo" /> </button>
                <button> <img src="/partner1.png" alt="partner_logo" /> </button>
                <button> <img src="/partner2.png" alt="partner_logo" /> </button>
                <button> <img src="/partner3.png" alt="partner_logo" /> </button>
            </div>
            <div className="slider_partneri">
                <div>
                    <button className="btn1_sp">  </button>
                </div>
                <div>
                    <button className="btn2_sp">  </button>
                </div>
                <div>
                    <button className="btn3_sp">  </button>
                </div>
            </div>
        </div>
    </div>
  );
  }
}

export default Middle_homepage;