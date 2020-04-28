import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Header.css';
import { Link } from 'react-router-dom';
// import { __ } from '../utils/i18n';

class Header extends Component {
render(){

  return (
    <div>
      <div className="header">

        <link href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css" />

        {/* <input type="checkbox" id="check"/>
        <label for="check" class="checkbtn">
        <img src="/fa_bars.png" className="img_bars" alt="fa_bars"></img>
        </label> */}

        <div className="logo_header">
          <button href="/">
            <img src="./logo.png" alt="logo" />
          </button>
        </div>

        <div className="tri_crte">
          <input type="checkbox" id="check"/>
          <label for="check" class="checkbtn">
          <img src="/fa_bars.png" className="img_bars" alt="fa_bars"></img>
          </label>
        </div>

        <div className="probna">
          <p> DA LI CE ISKOCITI???? </p>
        </div>

        <div className="NB_css">
          <ul>
            <li><a href="/"> O nama </a></li>
            <li><a href="/#"> Projekti </a>
              <ul>
                <li><Link to="/#"> Projekat1 </Link></li>
                <li><Link to="/#"> Projekat2 </Link></li>
                <li><Link to="/#"> Projekat3 </Link></li>
                <li><Link to="/#"> Projekat4 </Link></li>
              </ul>
            </li>
            <div className="li_posle_padajuceg">
              <li><a href="/#" className="nsk"> Clanovi </a>
                <ul>
                  <li><Link to="/#"> Clan1 </Link></li>
                  <li><Link to="/#"> Clan2 </Link></li>
                  <li><Link to="/#"> Clan3 </Link></li>
                  <li><Link to="/#"> Clan4 </Link></li>
                </ul>
              </li>
              <li><a href="/#" className="nsk">Partneri</a></li>
              <li><a href="/#" className="nsk">Magazin</a></li>
              <li><a href="/#" className="nsk">Kontakt</a></li>
            </div>
          </ul>
        </div>

        <div className="desno_header">
          <img src="/logovi.png" alt="logo" /> 
          <img src="/logovi.png" alt="logo" />
          <img src="/logovi.png" alt="logo" />
          <img src="/logovi.png" alt="logo" />
        </div>

      </div>

      <div className="NB_response">
          <ul>
            <li><a href="/"> O nama </a></li>
            <li><a href="/#"> Projekti </a>
              <ul>
                <li><Link to="/#"> Repsus </Link></li>
                <li><Link to="/#"> prava stvar </Link></li>
                <li><Link to="/#"> ekof u pokretu </Link></li>
                <li><Link to="/#"> sport business day </Link></li>
              </ul>
            </li>
              <li><a href="/#" className="nsk"> Clanovi </a>
                <ul>
                  <li><Link to="/#"> Clan1 </Link></li>
                  <li><Link to="/#"> Clan2 </Link></li>
                  <li><Link to="/#"> Clan3 </Link></li>
                  <li><Link to="/#"> Clan4 </Link></li>
                </ul>
              </li>
              <li><a href="/#" className="nsk">Partneri</a></li>
              <li><a href="/#" className="nsk">Magazin</a></li>
              <li><a href="/#" className="nsk">Kontakt</a></li>
          </ul>
      </div>
    </div>
  );
  }
}

export default Header;