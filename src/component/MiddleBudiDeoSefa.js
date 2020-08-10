import React from 'react';
import './../css/MiddleBudiDeoSefa.css';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

class MiddleBudiDeoSefa extends React.Component {

  render() {
    return (
      <div className="middle_kontakt_sefa">

        <div className="kontaktirajte_nas" style={{color:"#71cbc9"}}> <p id="deoSefeNaslov"> BUDI DEO SEFA-e </p> </div>
        <div className="tekstBudiDeoSefe">
        Želiš da pokažeš svoje kvalitete? <br/>
        Stekneš praktično znanje, unaprediš svoje veštine i osetiš timski duh?<br/>
        Budi deo SEFA-e, pronađi sebe među naša četiri tima i uključi se u organizovanje projekata posle kojih ćeš steći nova znanja i saznanja, ali i ono najbitnije nove PRIJATELJE i kontakte za ceo život!<br/>
        <br/><br/>
        S obzirom da želimo da te bolje upoznamo popuni sledeći formular, ukratko nam napiši nešto o sebi i zašto želiš da budeš deo naše družine.
        <br/><br/>
        </div>
        <div className="FormContainerSefa">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12">
                <form>
                    <span style={{color:"white", paddingTop:"2%"}} className="deoSefa" id="deoSefaIme">Ime i prezime: </span><input style={{marginLeft:"2.5%", marginTop:"2%"}} type="text" id="defaultFormContactNameEx2" className="form-control1" />
                    <br/> 
                    <br/>
                    <span style={{color:"white"}} className="deoSefa" id="deoSefaTel">Broj telefona: </span><input style={{marginLeft:"2.5%"}} type="number" id="defaultFormContactPhoneEx2" className="form-control1" />
                    <br/>
                    <br/>
                    <span style={{color:"white"}} className="deoSefa" id="deoSefaEmail">Email: </span><input style={{marginLeft:"4%"}} type="text" id="defaultFormContactEmailEx2" className="form-control1" />
                    <br/>
                    <br/>
                    <span style={{color:"white", verticalAlign: "top"}} className="deoSefa">Ukratko o sebi: </span><textarea style={{marginLeft:"2.5%"}} type="text" id="defaultFormContactDescEx2" className="form-control1" row="3" />
                </form>
                </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>

        <div className="btn_kontakt">
            <button> Pošalji </button>    
        </div>

      </div>
      );
  }

}

export default MiddleBudiDeoSefa;