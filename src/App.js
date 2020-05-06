import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './component/Homepage';
import ONama from './component/ONama';
import Partneri from './component/Partneri';
import Magazin from './component/Magazin';
import Kontakt from './component/Kontakt';
import Timovi from './component/Timovi';

class App extends React.Component {

  render() {
    // window.onblur=function(){
    //   let favicon = this.document.getElementById("favicon");
    //   favicon.href = "/beliLogo.png";
    // }
    
    // window.onfocus=function(){
    //   let favicon = this.document.getElementById("favicon");
    //   favicon.href = "/logo.png";
    // }
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/oNama" exact component={ONama} />
          <Route path="/partneri" exact component={Partneri} />
          <Route path="/magazin" exact component={Magazin} />
          <Route path="/kontakt" exact component={Kontakt} />
          <Route path="/timovi" exact component={Timovi} />
        </Switch>
      </BrowserRouter>
    );
  }

}

export default App;