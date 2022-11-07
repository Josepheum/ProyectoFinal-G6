import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import './Juego.css';
import Encabezado from './Encabezado.js';
import LetrasErroneas from './LetrasErroneas.js';
import Palabra from './Palabra.js';
import Notificacion from './Notificacion.js';
import Mensaje from './Mensaje.js';
import {mostrarNotificacion as mostrar} from './Auxiliar.js';


const Imagenes=require.context('./imagenes',true);

const palabras = ["hola","auto", "computadora","elemento","videojuego","casa","palacio","fortaleza","argentina","payaso"];
let palabraSeleccionada=palabras[Math.floor(Math.random()* palabras.length)];
let jugable=true;
   
export default function Juego() {
	const [jugable,setJugable]=useState(true);
	const [letrasCorrectas, setLetrasCorrectas]= useState([]);
	const [letrasErroneas, setLetrasErroneas]= useState([]);
	const [mostrarNotificacion, setMostrarNotificacion]= useState(false);
	const [mostrarMensaje, setMostrarMensaje]= useState(true);
	
	const btn_letras=document.querySelectorAll("#letras button");
	for (let i=0; i<btn_letras.length;i++){
		btn_letras[i].addEventListener('click',click_letras);	
	}
		
	useEffect(()=> {
		const handleKeydown = event => {
			const {key, keyCode}= event;
				if (jugable && keyCode >= 65 && keyCode <= 90){
					
					const letra = key.toLowerCase();
					
			
				if(palabraSeleccionada.includes(letra)){
					if (!letrasCorrectas.includes(letra)) {
						setLetrasCorrectas(letrasActuales => [...letrasActuales, letra]);
					} else {
						mostrar(setMostrarNotificacion);
				}
				} else {
					if (!letrasErroneas.includes(letra)){
						setLetrasErroneas(letrasErroneas => [...letrasErroneas, letra]);
					
					} else {
						mostrar(setMostrarNotificacion);
					}
				}
			}		
		}
		window.addEventListener('keydown', handleKeydown);
		
		return () => window.removeEventListener('keydown', handleKeydown);
	}, [letrasCorrectas, letrasErroneas, jugable]);
	
	function jugarNuevamente(){
		setJugable(true);
		
		setLetrasCorrectas([]);
		setLetrasErroneas([]);
		
		const random=Math.floor(Math.random()* palabras.length);
		palabraSeleccionada=palabras[random];
		
	}
	
	
	
	
	return (
	
	
		<body className="cuerpo">
		<div className="juego">
		<Encabezado />
		
		<img id="errores" src={Imagenes(`./img${letrasErroneas.length}.png`)}/>

		<LetrasErroneas leatrasErroneas={LetrasErroneas} letrasErroneas={letrasErroneas}/>
		<Palabra palabraSeleccionada ={palabraSeleccionada} letrasCorrectas={letrasCorrectas}/>
			<div>
				<button onClick= {jugarNuevamente}>Otra Palabra Aleatorea</button>
				
				
				
				
				<div id="letras">
					<button>A</button>
					<button>B</button>
					<button>C</button>
					<button>D</button>
					<button>E</button>
					<button>F</button>
					<button>G</button>
					<button>H</button>
					<button>I</button>
					<button>J</button>
					<button>K</button>
					<button>L</button>
					<button>M</button>
					<button>N</button>
					<button>Ñ</button>
					<button>O</button>
					<button>P</button>
					<button>Q</button>
					<button>R</button>
					<button>S</button>
					<button>T</button>
					<button>U</button>
					<button>V</button>
					<button>W</button>
					<button>X</button>
					<button>Y</button>
					<button>Z</button>
				
				</div>
				
			</div>
			
		</div>	
		<Notificacion mostrarNotificacion={mostrarNotificacion}/>	
		
		<Mensaje letrasCorrectas={letrasCorrectas} letrasErroneas={letrasErroneas} palabraSeleccionada={palabraSeleccionada} setJugable={setJugable} jugarNuevamente={jugarNuevamente}/>
	</body>
	)
	
	function click_letras(event){
		const spans=document.querySelectorAll('#palabraSeleccionada letras');
		const button = event.target; //busca las teclas presionadas en la función.
		button.disabled=true;
		const letrasCorrectas=palabraSeleccionada.toLowerCase();
		const palabra=palabraSeleccionada.toLowerCase();
		
		let acerto = false;
		for(let i=0;i<palabraSeleccionada.length;i++){
			if(letrasCorrectas===palabraSeleccionada[i]){
				spans[i].letrasCorrectas=letrasCorrectas;
				acerto=true;
			}
		}
		console.log("letra " + letrasCorrectas + " en palabra " + palabraSeleccionada + " ¿existe? " + acerto);
	}
	
	
	
	
}
