import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import NotMatch from './Component/NotMatch/NotMatch';
import CountryDetail from './Component/CountryDetail/CountryDetail';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    
    <Router>
      <Header></Header>
      <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/countryDetail/:key">
              <CountryDetail></CountryDetail>

            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          
            <Route path="*">
              <NotMatch></NotMatch>
            </Route>
      </Switch>
    </Router>
    
  );
}



export default App;
