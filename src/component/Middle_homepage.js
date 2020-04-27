import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Middle_homepage.css';

class Middle_homepage extends Component {
render(){

  return (
    <div>
        <div className ="baner">
            <p> PRAVE STVARI NA PRAVI NACIN </p>
        </div>

        <div className="partneri">
            <div className="partneri_tekst">
                <div className="tekst_nasi"> <p> NASI </p> </div>
                <div className="tekst_partneri"> <p> PARTNERI </p> </div>
            </div>
            <div className="partneri_logovi">
                <button> <img src="/partner1.png" alt="partner_logo" /> </button>
                <button> <img src="/partner2.png" alt="partner_logo" /> </button>
                <button> <img src="/partner1.png" alt="partner_logo" /> </button>
                <button> <img src="/partner2.png" alt="partner_logo" /> </button>
                <button> <img src="/partner1.png" alt="partner_logo" /> </button>
                <button> <img src="/partner2.png" alt="partner_logo" /> </button>
            </div>
        </div>
    </div>
  );
  }
}

export default Middle_homepage;