import React from 'react';
import './Juego.css';


export default function Palabra({palabraSeleccionada, letrasCorrectas}){
	return(
	<div className="palabra"> 
		{palabraSeleccionada.split('').map((letra,i) => {
			return (
				<span className="letra" key={i}>
					{letrasCorrectas.includes(letra) ? letra: ''}
				</span>
			)
		})}
	</div>
	)
}
