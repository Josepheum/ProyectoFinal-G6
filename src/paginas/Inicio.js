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
	
		
		<NavLink className={({isActive}) => isActive ? "activo" : "negro"}to='/arkanoid'>
		<button id="jugarInicio"> Arkanoid</button>
		< /NavLink>
		<NavLink className={({isActive}) => isActive ? "activo" : "negro"}to='/dude'>
		<button id="jugarInicio"> Dude</button>
		< /NavLink>
		<NavLink className={({isActive}) => isActive ? "activo" : "negro"}to='/arkanoid'>
		<button id="jugarInicio"> JuegoPhaser</button>
		< /NavLink>
		<NavLink className={({isActive}) => isActive ? "activo" : "negro"}to='/arkanoid'>
		<button id="jugarInicio"> JuetoReact</button>
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
