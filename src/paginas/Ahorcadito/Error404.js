import {NavLink} from 'react-router-dom';

function Error404() {
  return (
        	<>
	<header className="encabezado">
			<h1 className="titulo"> Pagina no encontrada </h1>
			
			<NavLink className={({isActive}) => isActive ? "activo" : "negro"}to='/ahorcado'>
		<button> Volver a la Página Inicial</button>
		< /NavLink>
	</header>
	</>
  );
}

export default Error404;
