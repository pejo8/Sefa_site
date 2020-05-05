import React from 'react';
import './../css/Footer1.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faMapPin } from '@fortawesome/free-solid-svg-icons'

class Footer1 extends React.Component {

  render() {
    return (
      <div className="Footer1">
            <div className="logo_footer">
                <div> <img src="./logo.png" alt="logo" /> </div>
            </div>
            <div className="sajt_footer">
                <p> Sajt </p>
                <ul>
                    <li><a href="/oNama"> O nama </a></li>
                    <li><a href="/oNama"> Projekti </a></li>
                    <li><a href="/oNama"> Clanovi </a></li>
                    <li><a href="/oNama"> Partneri </a></li>
                    <li><a href="/oNama"> Magazin </a></li>
                    <li><a href="/oNama"> Kontakt </a></li>
                </ul>
            </div>
            <div className="sajt_footer">
                <p> Projekti </p>
                <ul>
                    <li><a href="/oNama"> Repsus </a></li>
                    <li><a href="/oNama"> Prava stvar </a></li>
                    <li><a href="/oNama"> Ekof u pokretu </a></li>
                    <li><a href="/oNama"> Sport business day </a></li>
                    <li><a href="/oNama"> Bez straha </a></li>
                </ul>
            </div>
            <div className="kontakt_footer">
                <p> Kontakt </p>
                <div className="icons_kontakt_footer"> <FontAwesomeIcon icon={faPhone} className="icon_fi_footer"/>
                    <div> +381 63 1521141 </div>
                </div>
                <div className="icons_kontakt_footer"> <FontAwesomeIcon icon={faEnvelope} className="icon_fi_footer" />
                    <div> sefa.ekof@gmail.com </div>
                </div>
                <div className="icons_kontakt_footer"> <FontAwesomeIcon icon={faMapPin} className="icon_fi_footer"/>
                    <div> Kamenicka 6, Beograd </div>
                </div>
                <div className="mreze_footer">
                    <button> <img src="/logo_facebook.png" alt="logo" /> </button>
                    <button> <img src="/logo_instagram.png" alt="logo" /> </button>
                    <button> <img src="/logo_youtube.png" alt="logo" /> </button>
                    <button> <img src="/logo_linkedin.png" alt="logo" /> </button>
                </div>
            </div>
      </div>
      );
  }

}

export default Footer1;