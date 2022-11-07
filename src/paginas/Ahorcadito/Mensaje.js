import React, {useEffect} from 'react';
import {controlarJuegoGanado} from './Auxiliar.js';
import './Juego.css';

const Mensaje=({letrasCorrectas, letrasErroneas, palabraSeleccionada, setJugable, jugarNuevamente}) => {
	let mensajeFinal='';
	let mensajeFinalRevelarPalabra='';
	let jugable=true;
	
	if (controlarJuegoGanado(letrasCorrectas, letrasErroneas, palabraSeleccionada) === 'gana'){
		mensajeFinal = '¡Felicidades! ¡Has completado la palabra!';
		jugable=false;
	} else if (controlarJuegoGanado(letrasCorrectas, letrasErroneas, palabraSeleccionada) === 'pierde'){
		mensajeFinal = 'Has perdido, te falta vocabulario';
		mensajeFinalRevelarPalabra= `... la palabra seleccionada era: ${palabraSeleccionada}`;
		jugable=false;
	}
	
	useEffect(()=> setJugable(jugable));
	return(
	<div className="contenedor-mensaje" style={mensajeFinal !== '' ? {display: 'flex'} : {}}>
		<div className="mensaje">
			<h2	>{mensajeFinal}</h2>
			<h3>{mensajeFinalRevelarPalabra}</h3>
			<button onClick= {jugarNuevamente}>Jugar de Nuevo</button>
		</div>
	</div>
	)
}

export default Mensaje
