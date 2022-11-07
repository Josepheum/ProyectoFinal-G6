import React from 'react';
import './Inicio.css';
//import React, {Component} from 'react';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Arkanoid from './paginas/Arkanoid/Juego.js'
import Dude from './paginas/Dude/Dude.js'


import Inicio from './paginas/Inicio.js'
import Integrantes from './paginas/Integrantes.js'
import Error404 from './paginas/Error404.js'
import Navegador from './paginas/Navegador';
import './paginas/Navegador.css';

export default function Portal() {
  return (
  <BrowserRouter>
  <Navegador/>
  
        <Routes>
			<Route path='/' element={<Inicio />}/>
			<Route path='/integrantes' element={<Integrantes />}/>
			<Route path='/arkanoid' element={<Arkanoid />}/>
			<Route path='/dude' element={<Dude />}/>
			
			<Route path='*' element={<Error404/>}></Route>
        </Routes>
         
    </BrowserRouter>
  );
}
