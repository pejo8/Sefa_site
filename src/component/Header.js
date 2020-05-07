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
            <img src="./logo1.png" alt="logo" />
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
            <li><a href="/oNama"> O nama </a></li>
            <li><a href="/#"> Projekti <FontAwesomeIcon icon={faChevronCircleDown} className="fi_menu"/> </a>
              <ul>
                <li><Link to="/#"> Repsus </Link></li>
                <li><Link to="/#"> prava stvar </Link></li>
                <li><Link to="/#"> ekof u pokretu </Link></li>
                <li><Link to="/#"> sport business day </Link></li>
                <li><Link to="/#"> bez straha </Link></li>
              </ul>
            </li>
            <div>
              <li className="li_clanovi"><a href="/timovi" className="nsk"> Clanovi <FontAwesomeIcon icon={faChevronCircleDown} className="fi_menu"/> </a>
                <ul>
                  <li><Link to="/#"> Timovi <FontAwesomeIcon icon={faChevronCircleDown} className="fi_menu"/> </Link>
                    <ul>
                      <li><Link to="/#"> Tim za komunikacije </Link></li>
                      <li><Link to="/#"> Tim za upravljanje projektima </Link></li>
                      <li><Link to="/#"> Tim za sponzorstva i prodaju </Link></li>
                      <li><Link to="/#"> Tim za ljudske resurse </Link></li>
                  </ul>
                  </li>
                  <div className="ostatak_clanova">
                    <li><Link to="/#"> Alumni </Link></li>
                    <li><Link to="/#"> Savetodavno telo </Link></li>
                    <li><Link to="/#"> Budi deo Sefe </Link></li>
                  </div>
                </ul>
              </li>
              <li><a href="/partneri" className="nsk">Partneri</a></li>
              <li><a href="/magazin" className="nsk">Magazin</a></li>
              <li><a href="/kontakt" className="nsk">Kontakt</a></li>
            </div>
          </ul>
        </div>

        <div className="desno_header">
          <button> <img src="/logo_facebook.png" alt="logo" /> </button>
          <button> <img src="/logo_instagram.png" alt="logo" /> </button>
          <button> <img src="/logo_youtube.png" alt="logo" /> </button>
          <button> <img src="/logo_linkedin.png" alt="logo" /> </button>
        </div>

      </div>

      <div className="NB_response" id="NB_response">
      <button className="dugmeNavBar" onClick={this.exitNb}><FontAwesomeIcon icon={faTimes} color="white" size="3x"/></button>

          <ul>
            <li><a href="/"> O nama </a></li>
            <li><a href="/#"> Projekti </a>
              <ul>
                <li><Link to="/#"> Repsus </Link></li>
                <li><Link to="/#"> prava stvar </Link></li>
                <li><Link to="/#"> ekof u pokretu </Link></li>
                <li><Link to="/#"> sport business day </Link></li>
                <li><Link to="/#"> bez straha </Link></li>
              </ul>
            </li>
              <li><a href="/#" className="nsk"> Clanovi </a>
                <ul>
                  <li><Link to="/#"> Timovi 
                    <input type="checkbox" id="check1" onClick={this.showTimovi}
                                  defaultChecked={this.props.complete}/>
                    <label for="check1">
                      pritisni                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                    </label>
                  </Link>
                    <ul className="padajuciTimovi" id="padajuciTimovi">
                      <li><Link to="/#"> Tim za komunikacije </Link></li>
                      <li><Link to="/#"> Tim za upravljanje projektima </Link></li>
                      <li><Link to="/#"> Tim za sponzorstva i prodaju </Link></li>
                      <li><Link to="/#"> Tim za ljudske resurse </Link></li>
                    </ul>
                  </li>
                  <li><Link to="/#"> Alumni </Link></li>
                  <li><Link to="/#"> Savetodavno telo </Link></li>
                  <li><Link to="/#"> Budi deo sefe </Link></li>
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