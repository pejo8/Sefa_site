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
          <Route path="/pravaStvar" exact component={PravaStvar} />
          <Route path="/projekat" exact component={Projekat} />
          <Route path="/SportBusinessDay" exact component={SportBusinessDay} />
          <Route path="/ekofUPokretu" exact component={EkofUPokretu} />
        </Switch>
      </BrowserRouter>
    );
  }

}

export default App;