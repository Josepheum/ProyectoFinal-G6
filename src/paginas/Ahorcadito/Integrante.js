import React, {useState} from 'react';
import './DatosIntegrantes.css';

const Integrante=(props)=> {
	
		
	return (
		<div className="item">
			<div className="text-center card-box">
				<div className="member-card pt-2 pb-2">
					<div className="thumb-lg member-thumb mx-auto">
						<img 
							src={props.img}
							className="rounded-circle img-thumbnail"
							alt="imagen-perfil" 
						/>
						<div className="">
							<h4>{props.nombre} {props.apellido}</h4>
							<p className="text-muted"> Rol del equipo: {props.rol}</p>
							<p className="text-muted"> Usuario github: {props.github}</p>
							<p className="text-muted">Programas domindos: {props.programas}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		
	)
	
}
export default Integrante;
