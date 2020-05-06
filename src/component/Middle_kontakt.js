import React from 'react';
import './../css/Middle_kontakt.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faMapPin } from '@fortawesome/free-solid-svg-icons'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

class Middle_kontakt extends React.Component {

  render() {
    return (
      <div className="middle_kontakt">

        <div className="kontaktirajte_nas"> <p1> KONTAKTIRAJTE NAS </p1> </div>

        <div className="kontakt_fi">
            <div className="icons_kontakt"> <FontAwesomeIcon icon={faPhone} className="icon_fi"/>
                <div1> TELEFON </div1>
                <div> <p>+381 63 1521141</p> </div>
            </div>
            <div className="icons_kontakt"> <FontAwesomeIcon icon={faEnvelope} className="icon_fi" />
                <div1> EMAIL </div1>
                <div> sefa.ekof@gmail.com </div>
            </div>
            <div className="icons_kontakt"> <FontAwesomeIcon icon={faMapPin} className="icon_fi" />
                <div1> ADRESA </div1>
                <div> Kamenicka 6, Beograd </div>
            </div>
        </div>

        <div className="FormContainer">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12">
                <form>
                  <div className="poruka">
                    <p className="naslov_cf">Posaljite nam poruku</p>
                    <input placeholder="Ime" type="text" id="defaultFormContactNameEx" className="form-control1" />
                    <input placeholder="Prezime" type="email" id="defaultFormContactEmailEx" className="form-control2" />
                    <br />
                    <br />
                    <input placeholder="Email" type="text" id="defaultFormContactSubjectEx" className="form-control3" />
                    <br />
                    <br />
                    <textarea placeholder="Poruka" type="text" id="defaultFormContactMessageEx" className="form-control4" rows="3" />
                   </div>
                  </form>
                </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>

        <div className="btn_kontakt">
            <button> Posalji </button>    
        </div>

      </div>
      );
  }

}

export default Middle_kontakt;