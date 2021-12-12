import React from 'react';
import './App.css'
import FrontTop from './Componentes/FrontTop/FrontTop';
import FrontMid from './Componentes/FrontMid/FrontMid';
import Footer from './Componentes/Footer/Footer';
import DarkLight from './Componentes/DarkLight/DarkLight';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact >
        <DarkLight/>
          <FrontTop />
          <FrontMid cls="Container-img"/>
          <Footer/>
        </Route>

        <Route path="/contactos">
       
        </Route>

      </Switch>
    </Router>
  );
}

export default App;