import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './component/Homepage';
import ONama from './component/ONama';
import Partneri from './component/Partneri';
import Magazin from './component/Magazin';
import Kontakt from './component/Kontakt';
import Timovi from './component/Timovi';
import PravaStvar from './component/PravaStvar';
import Projekat from './component/Projekat';
import SportBusinessDay from './component/SportBusinessDay';
import EkofUPokretu from './component/EkofUPokretu'
import BudiDeoSefa from './component/BudiDeoSefa';
import UpravljanjeProjektima from './component/UpravljanjeProjektima';
import SponzorstvoIProdaja from './component/SponzorstvoIProdaja';
import LjudskiResursi from './component/LjudskiResursi';
import Alumni from './component/Alumni';
import SavetodavnoTelo from './component/SavetodavnoTelo';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/oNama" exact component={ONama} />
          <Route path="/partneri" exact component={Partneri} />
          <Route path="/magazin" exact component={Magazin} />
          <Route path="/kontakt" exact component={Kontakt} />
          <Route path="/timovi" exact component={Timovi} />
          <Route path="/upravljanjeProjektima" exact component={UpravljanjeProjektima} />
          <Route path="/sponzorstvoIProdaju" exact component={SponzorstvoIProdaja} />
          <Route path="/ljudskeResurse" exact component={LjudskiResursi} />
          <Route path="/alumni" exact component={Alumni} />
          <Route path="/savetodavnoTelo" exact component={SavetodavnoTelo} />
          <Route path="/pravaStvar" exact component={PravaStvar} />
          <Route path="/repsus" exact component={Projekat} />
          <Route path="/SportBusinessDay" exact component={SportBusinessDay} />
          <Route path="/ekofUPokretu" exact component={EkofUPokretu} />
          <Route path="/budiDeoSefa" exact component={BudiDeoSefa} />
        </Switch>
      </BrowserRouter>
    );
  }

}

export default App;