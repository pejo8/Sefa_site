import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Middle_homepage.css';

class Middle_homepage extends Component {
render(){

  return (
    <div className="middle">
        <div className ="baner">
            <img src="/sefa_baner.jpg" alt="baner" className="baner_img"/>
        </div>

        <div className="middle_projekti">
            <div>
                <p> Nasi projekti. </p>
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

        <div className="partneri">
            <div className="partneri_tekst">
                <div className="tekst_nasi"> <p> NASI </p> </div>
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