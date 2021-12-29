import React from 'react';
import './App.css'
import FrontTop from './Componentes/FrontTop/FrontTop';
import FrontMid from './Componentes/FrontMid/FrontMid';
import Footer from './Componentes/Footer/Footer';
import DarkLight from './Componentes/DarkLight/DarkLight';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Traductor from './Componentes/Traductor/Traductor';




function App() {
  const[darkMode,setDarkMode]=useState(false)
  return (
    <Router>
      <Switch>
        <Route path="/" exact >
          <Traductor cls="mover"/>
          <DarkLight /> 
          <FrontTop />
          <FrontMid cls="Container-img"/>
          <Footer/>

        </Route>

        <Route path="/contactos">
       contactos
        </Route>

        <Route path="/registros">
       registtros
        </Route>

      </Switch>
    </Router>
  );
}

export default App;


