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
                <p> Sefa </p>
                <ul>
                    <li><a href="/oNama"> O nama </a></li>
                    <li style={{color:"white"}}>Projekti</li>
                    <li style={{color:"white"}}>Članovi</li>
                    <li><a href="/partneri"> Partneri </a></li>
                    <li><a href="/magazin"> Magazin </a></li>
                    <li><a href="/kontakt"> Kontakt </a></li>
                </ul>
            </div>
            <div className="sajt_footer">
                <p> Projekti </p>
                <ul>
                    <li><a href="/repsus"> Repsus </a></li>
                    <li><a href="/pravaStvar"> Prava stvar </a></li>
                    <li><a href="/ekofUPokretu"> Ekof u pokretu </a></li>
                    <li><a href="/SportBusinessDay"> Sport business day </a></li>
                    <li><a href="/bezStraha"> Bez straha </a></li>
                </ul>
            </div>
            <div className="sajt_footer">
                <p> Clanovi </p>
                <ul>
                    <li><a href="/oNama"> Timovi </a></li>
                    <li><a href="/alumni"> Alumni </a></li>
                    <li><a href="/savetodavnoTelo"> Savetodavno telo </a></li>
                    <li><a href="/budiDeoSefa"> Budi deo Sefe </a></li>
                </ul>
            </div>
            <div className="sajt_footer">
                <p> Timovi </p>
                <ul>
                    <li><a href="/timovi"> Komunikacije  </a></li>
                    <li><a href="/upravljanjeProjektima"> Upravljanje projektima </a></li>
                    <li><a href="/sponzorstvoIProdaju"> Sponzorstva i prodaja </a></li>
                    <li><a href="/ljudskeResurse"> Ljudski resursi </a></li>
                </ul>
            </div>
            <div className="kontakt_footer">
                <p> Kontakt </p>
                <div className="icons_kontakt_footer"> <FontAwesomeIcon icon={faPhone} className="icon_fi_footer"/>
                    <div> +381 63 1521141 </div>
                </div>
                <div className="icons_kontakt_footer"> <FontAwesomeIcon icon={faEnvelope} className="icon_fi_footer" />
                    <div> office@sefa.org.rs </div>
                </div>
                <div className="icons_kontakt_footer"> <FontAwesomeIcon icon={faMapPin} className="icon_fi_footer"/>
                    <div> Kamenička 6, Beograd </div>
                </div>
                <div className="mreze_footer">
                    <button><a href="https://www.facebook.com/sefa.org/"><img src="/logo_facebook.png" alt="logo" /></a> </button>
                    <button><a href="https://www.instagram.com/sefa_org/"> <img src="/logo_instagram.png" alt="logo" /></a> </button>
                    <button> <img src="/logo_youtube.png" alt="logo" /></button>
                    <button><a href="https://www.linkedin.com/company/sefa-org"> <img src="/logo_linkedin.png" alt="logo" /> </a> </button>
                </div>
            </div>
        </div>

        <div className="footer_responsive">
            <div> Sefa na društvenim mrežama </div>
            <div className="mreze_footer">
                    <button><a href="https://www.facebook.com/sefa.org/"><img src="/logo_facebook.png" alt="logo" /></a></button>
                    <button><a href="https://www.instagram.com/sefa_org/"><img src="/logo_instagram.png" alt="logo" /></a></button>
                    <button><img src="/logo_youtube.png" alt="logo" /></button>
                    <button><a href="https://www.linkedin.com/company/sefa-org"> <img src="/logo_linkedin.png" alt="logo" /> </a> </button>
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