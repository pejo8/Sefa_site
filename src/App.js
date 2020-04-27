import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './component/Homepage';

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
        </Switch>
      </BrowserRouter>
    );
  }

}

export default App;