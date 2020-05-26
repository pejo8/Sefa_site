import React, { Component } from 'react';
import '../css/Middle_SportBusinessDay.css';

class Middle_SportBusinessDay extends Component {

    render(){
        return (
            <div className="middle_projekti">
                <img src="/SBDlogo.png" className="repsus" alt="repsus"/>
                
                <div className="tekstProjekti">
                 <span id="repsusTekst">Sport Business Day</span> je konferencija namenjena studentima koji svoja interesovanja pronalaze u sportu. 
                 Konferencija je nastala 2018. godine i prosečno okuplja između 200 i 300 delegata. 
                 CIlj konferencije je da edukuje studente o funkcionisanju klubova, sportskih udruženja, kao i preduzeća koja organizuju sportske događaje. 
                 Na konferenciji se obrađuju teme menadžmenta i marketinga u sportu, sa porukom da sport pripada narodu, a ne pojedincima, ali i da je kvalitetan menadžment potreban svakom klubu.<br/><br/>
                 S obzirom da se sport najčešće vezuje za osobe muškog pola, mi se trudimo da kroz ovaj projekat prikažemo da i osobe lepšeg pola mogu svoju karijeru graditi u sportskim klubovima, udruženjima, itd.<br/><br/>
                 Osim menadžmenta  i marketinga, koji predstavljaju osnovne teme, konferencija se bavi i temama vezanim za inovaciju i tehnologiju u sportu, kao i novinarstvu u sportu. <br/><br/>
                 Projekat je namenjen kako studentima Ekonomskog fakulteta tako i studentima Pravnog fakulteta, FON-a, FPN-a, DIF-a, ETF-a …

                </div>
                <div className="slider_img">
                <div className="img1">
                </div>
                <div className="img2">
                </div>
                <div className="img3">
                </div>
                </div>
                <img src="/Baner.jpg" className="banerSPD" alt="" />
            </div>
        );
    }
}

export default Middle_SportBusinessDay;