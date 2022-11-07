import './Navegador.css';
import {NavLink} from 'react-router-dom';


export default function Navegador() {
  return (
  
  <div className="navegador">
	<div className="item">
			<NavLink className={({isActive}) => isActive ? "active" : "white"}to='/'>Inicio< /NavLink>
	</div>
	<div className="item">
			<NavLink className={({isActive}) => isActive ? "active" : "white"}to='/arkanoid'>Juego< /NavLink>		
    </div>
	<div className="item">
			<NavLink className={({isActive}) => isActive ? "activo" : "white"}to='/integrantes'>Integrantes< /NavLink>
	</div>
	<div className="item">
			<NavLink className={({isActive}) => isActive ? "activo" : "white"}to='/dude'>Dude< /NavLink>
	</div>
	<div className="item">
			<NavLink className={({isActive}) => isActive ? "activo" : "white"}to='/integrantes'>JuegoPhaser< /NavLink>
	</div>
	<div className="item">
			<NavLink className={({isActive}) => isActive ? "activo" : "white"}to='/integrantes'>JuegoReact< /NavLink>
	</div>
  </div>
  
  );
}

