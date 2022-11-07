import './Navegador.css';
import {NavLink} from 'react-router-dom';


export default function Navegador() {
  return (
  
  <div className="navegador">
	<div className="item">
			<NavLink className={({isActive}) => isActive ? "active" : "white"}to='/'>Inicio< /NavLink>
	</div>
	<div className="item">
			<NavLink className={({isActive}) => isActive ? "active" : "white"}to='/ahorcado'>Juego< /NavLink>		
    </div>
	<div className="item">
			<NavLink className={({isActive}) => isActive ? "activo" : "white"}to='/integrantes'>Integrantes< /NavLink>
	</div>
  </div>
  
  );
}

