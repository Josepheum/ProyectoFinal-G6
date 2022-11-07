import React from 'react';
import './Juego.css';


const LetrasErroneas=({letrasErroneas})=> {
	return(
	<div className="contenedor-palabras-erroneas">
		<div> 
			{letrasErroneas.length > 0 && <p> Letras Erradas </p>}
			{letrasErroneas
				.map((letra,i) => <span key={i}>{letra}</span>)
				.reduce((prev,curr)=> prev === null ? [curr] : [prev, ', ', curr], null)}
			
		</div>
	</div>
	)
}
export default LetrasErroneas
