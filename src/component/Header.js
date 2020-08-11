import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Header.css';
import { Link } from 'react-router-dom';
import { faTimes , faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends Component {
  constructor(init){
    super(init);
    this.handleChange = this.handleChange.bind(this);
    this.showTimovi = this.showTimovi.bind(this);
  }
  handleChange({target}){
    let nb = document.getElementById('NB_response');
    if (target.checked){
      nb.style.display = "block";
    } else {
      nb.style.display = "none";
    }
  }

  showTimovi({target}) {
    let nb = document.getElementById('padajuciTimovi');
    if (target.checked){
      if( nb.style.display === "block")
        nb.style.display = "none";
      else
      nb.style.display = "block";
    } else {
      nb.style.display = "none";
    }
  }

  exitNb() { 
    let nb = document.getElementById('NB_response');
    nb.style.display = "none";
    let cb = document.getElementById('check');
    cb.checked = '';

  }

  render(){

  return (
    <div>
      <div className="header">

        <link href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css" />

        <div className="logo_header">
          <button >
          <Link to="/" >
            <img src="./logo4.png" alt="logo" />
          </Link>
          </button>
        </div>

        <div className="tri_crte">
          <label htmlFor="check" className="checkbtn">
          <input type="checkbox" id="check" onClick={this.handleChange}
                        defaultChecked={this.props.complete}/>
            <img src="/fa_bars.png" className="img_bars" alt="fa_bars"></img>
          </label>
        </div>

        <div className="NB_css">
          <ul>
            <li><Link to="/oNama"> O nama </Link></li>
            <li id="projekti"> Projekti <FontAwesomeIcon icon={faChevronCircleDown} className="fi_menu"/>
              <ul>
                <li><Link to="/pravaStvar"> prava stvar </Link></li>
                <li><Link to="/repsus"> Repsus </Link></li>
                <li><Link to="/ekofUPokretu"> ekof u pokretu </Link></li>
                <li><Link to="/SportBusinessDay"> sport business day </Link></li>
                <li><Link to="/bezStraha"> bez straha </Link></li>
              </ul>
            </li>
            <div>
              <li className="li_clanovi" id="clanovi"> Članovi <FontAwesomeIcon icon={faChevronCircleDown} className="fi_menu"/>
                <ul>
                  <li><Link to="/#"> Timovi <FontAwesomeIcon icon={faChevronCircleDown} className="fi_menu"/> </Link>
                    <ul>
                      <li><Link to="/timovi"> Tim za komunikacije </Link></li>
                      <li><Link to="/upravljanjeProjektima"> Tim za upravljanje projektima </Link></li>
                      <li><Link to="/sponzorstvoIProdaju"> Tim za sponzorstva i prodaju </Link></li>
                      <li><Link to="/ljudskeResurse"> Tim za ljudske resurse </Link></li>
                  </ul>
                  </li>
                  <div className="ostatak_clanova">
                    <li><Link to="/alumni"> Alumni </Link></li>
                    <li><Link to="/savetodavnoTelo"> Savetodavno telo </Link></li>
                    <li><Link to="/budiDeoSefa"> Budi deo SEFA-e </Link></li>
                  </div>
                </ul>
              </li>
              <li><Link to="/partneri" className="nsk">Partneri</Link></li>
              <li><Link to="/magazin" className="nsk">Magazin</Link></li>
              <li><Link to="/kontakt" className="nsk">Kontakt</Link></li>
            </div>
          </ul>
        </div>

        <div className="desno_header">
          <button> <a href="https://www.facebook.com/sefa.org/"><img src="/logo_facebook.png" alt="logo" /></a></button>
          <button> <a href="https://www.instagram.com/sefa_org/"><img src="/logo_instagram.png" alt="logo" /> </a></button>
          <button> <img src="/logo_youtube.png" alt="logo" /> </button>
          <button> <a href="https://www.linkedin.com/company/sefa-org"> <img src="/logo_linkedin.png" alt="logo" /></a> </button>
        </div>

      </div>

      <div className="NB_response" id="NB_response">
      <button className="dugmeNavBar" onClick={this.exitNb}><FontAwesomeIcon icon={faTimes} color="white" size="3x"/></button>

          <ul>
            <li><Link to="/oNama"> O nama </Link></li>
            <li id="projektiHome"> Projekti
              <ul>
                <li><Link to="/repsus"> Repsus </Link></li>
                <li><Link to="/pravaStvar"> prava stvar </Link></li>
                <li><Link to="/ekofUPokretu"> ekof u pokretu </Link></li>
                <li><Link to="/SportBusinessDay"> sport business day </Link></li>
                <li><Link to="/bezStraha"> bez straha </Link></li>
              </ul>
            </li>
              <li className="nsk" id="clanoviHome"> Članovi
                <ul>
                  <li>
                    <label className="timoviTekst">
                      <input type="checkbox" id="checkboxTimovi" onClick={this.showTimovi} defaultChecked={this.props.complete}/><span>Timovi </span> 
                      <FontAwesomeIcon icon={faChevronCircleDown} className="fi_menu"/>
                    </label>
                    <ul className="padajuciTimovi" id="padajuciTimovi">
                      <li><Link to="/timovi"> Tim za komunikacije </Link></li>
                      <li><Link to="/upravljanjeProjektima"> Tim za upravljanje projektima </Link></li>
                      <li><Link to="/sponzorstvoIProdaju"> Tim za sponzorstva i prodaju </Link></li>
                      <li><Link to="/ljudskeResurse"> Tim za ljudske resurse </Link></li>
                    </ul>
                  </li>
                  <li><Link to="/alumni"> Alumni </Link></li>
                  <li><Link to="/savetodavnoTelo"> Savetodavno telo </Link></li>
                  <li><Link to="/budiDeoSefa"> Budi deo SEFA-e </Link></li>
                </ul>
              </li>
              <li><a href="/partneri" className="nsk">Partneri</a></li>
              <li><a href="/magazin" className="nsk">Magazin</a></li>
              <li><Link to="/kontakt" className="nsk">Kontakt</Link></li>
          </ul>
      </div>

      
    </div>
  );
  }
}

export default Header;