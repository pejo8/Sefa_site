import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Middle_homepage.css';

class Middle_homepage extends Component {
render(){

  return (
    <div>
        <div className ="baner">
            <img src="/sefa_baner.jpg" alt="baner" className="baner_img"/>
        </div>

        <div className="middle_projekti">
            
        </div>

        <div className="partneri">
            <div className="partneri_tekst">
                <div className="tekst_nasi"> <p> NASI </p> </div>
                <div className="tekst_partneri"> <p> PARTNERI </p> </div>
            </div>
            <div className="partneri_logovi">
                <button> <img src="/partner1.png" alt="partner_logo" /> </button>
<<<<<<< HEAD
                <button> <img src="/partner2.png" alt="partner_logo" /> </button>
                <button> <img src="/partner3.png" alt="partner_logo" /> </button>
                <button> <img src="/partner2.png" alt="partner_logo" /> </button>
                <button> <img src="/partner1.png" alt="partner_logo" /> </button>
=======
                <button> <img src="/partner2.jpg" alt="partner_logo" /> </button>
>>>>>>> master
                <button> <img src="/partner3.png" alt="partner_logo" /> </button>
            </div>
        </div>
    </div>
  );
  }
}

export default Middle_homepage;