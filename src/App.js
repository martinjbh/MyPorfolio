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
import data2 from './Componentes/Traducciones/Traducciones';




function App() {
  const[español,setEspañol]=useState(false)
  const[ingles,setIngles]=useState(false)

const cambiarIdioma=(booleano)=>{
  setEspañol(booleano)
  setIngles(!booleano)

}
console.log(data2.es.frontTop)


  return (
    <Router>
      <Switch>
        <Route path="/" exact >
          <Traductor cls="mover" cambiarIdioma={cambiarIdioma}/>
          <DarkLight /> 
          <FrontTop  español={español} ingles={ingles}/>
          <FrontMid cls="Container-img"español={español}  ingles={ingles}/>
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


