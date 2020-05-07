import React from 'react';
import './../css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faMapPin } from '@fortawesome/free-solid-svg-icons'

class Footer extends React.Component {

  render() {
    return (
      <div className="Footer1">
          <div className="gornji_deo">
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
            <div className="sajt_footer">
                <p> Clanovi </p>
                <ul>
                    <li><a href="/oNama"> Timovi </a></li>
                    <li><a href="/oNama"> Alumni </a></li>
                    <li><a href="/oNama"> Savetodavni tim </a></li>
                    <li><a href="/oNama"> Budi deo Sefe </a></li>
                </ul>
            </div>
            <div className="sajt_footer">
                <p> Timovi </p>
                <ul>
                    <li><a href="/oNama"> Komunikacije  </a></li>
                    <li><a href="/oNama"> Upravljanje projektima </a></li>
                    <li><a href="/oNama"> Sponzorstva i prodaja </a></li>
                    <li><a href="/oNama"> Ljudski resursi </a></li>
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

        <div className="footer_responsive">
            <div> Sefa na drustvenim mrezama </div>
            <div className="mreze_footer">
                    <button> <img src="/logo_facebook.png" alt="logo" /> </button>
                    <button> <img src="/logo_instagram.png" alt="logo" /> </button>
                    <button> <img src="/logo_youtube.png" alt="logo" /> </button>
                    <button> <img src="/logo_linkedin.png" alt="logo" /> </button>
            </div>
        </div>

        <div className="logo_footer">
            <div> <img src="./logo1.png" alt="logo" /> </div>
        </div>
      </div>
      );
  }

}

export default Footer;