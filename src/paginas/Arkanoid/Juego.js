import Phaser from 'phaser';
import {useState,useEffect} from 'react';
import Escena from './componentes/Escena';


function Juego() {
	
	//uso state de una variable listo, para evitar aplicación duplicada.
	const [listo, setListo]= useState(false);
	useEffect(()=>{
		    var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 0 }
                
            }
        },
        scene:[Escena]
        
    };
    
    	//Juego
    var juego = new Phaser.Game(config);
    
    //Gatillo para cuando el juego esta completamente listo.
    juego.events.on("LISTO",setListo)
    
    //Evita duplicado del lienzo.
    return ()=> {
		setListo(false);
		juego.destroy(true);
	}
	
	
		
},[listo]);


}

export default Juego;
