import React, {useState} from 'react';
import Integrante from './Integrante';
import './DatosIntegrantes.css';


const DatosIntegrantes=()=> {
	const [integrantes, setIntegrantes] = useState([
	{
		id: 1,
		nombre: "Jose",
		apellido: "Castro",
		rol: "Desarrollador",
		foto: "./imagenes/kirito2.png",
		programas: "Blender, Unity, Krita",
		github: "Josepheum",
	},
	{
		id: 2,
		nombre: "Computadora",
		apellido: "Personal",
		rol: "Procesadora",
		foto: "./imagenes/logo512.png",
		programas: "Todos",
		github: "",
	},
	
	]);
		
	return (
		<div className="row">
		{integrantes.map(integrante => {
			return <Integrante key={integrante.id} nombre={integrante.nombre} apellido={integrante.apellido} img={integrante.foto} rol={integrante.rol} github={integrante.github} programas={integrante.programas}/>;
			})}
		
		</div>
	
	)
	
}
export default DatosIntegrantes;
