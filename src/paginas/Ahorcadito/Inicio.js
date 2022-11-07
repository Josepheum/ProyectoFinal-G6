import logo from './logo.svg';
import {NavLink} from 'react-router-dom';

import './Inicio.css';
import './Juego.css';

function Inicio() {
  return (
	<main>
	<body className="cuerpo">
	<div className="juego">
	<header className="encabezado">
			<h1 className="titulo"> Pagina principal </h1>
	</header>
	
		
		<NavLink className={({isActive}) => isActive ? "activo" : "negro"}to='/ahorcado'>
		<button id="jugarInicio"> Empezar a Jugar</button>
		< /NavLink>
		
		<NavLink className={({isActive}) => isActive ? "activo" : "negro"}to='/integrantes'>
		<button id="jugarInicio">Integrantes</button>
		< /NavLink>

		</div>
		
	</body>
	</main>

  );
}

export default Inicio;
