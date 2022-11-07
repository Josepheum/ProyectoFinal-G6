import React from 'react';


const Notificacion=({mostrarNotificacion}) => {
	return(
	<div className={`contenedor-notificacion ${mostrarNotificacion ? 'mostrar' : ''}`}>
		
			<p className="Notificacion">Ya utilizaste esta letra</p>
		
	</div>
	)
}
export default Notificacion
