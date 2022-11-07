import Phaser from 'phaser';

/* variables*/
		var juegoAncho=800;
        var juegoAlto=600;
        var paleta;
        var pelota;
        var bloque;
        var bloqueArreglo=[
			'11'
			        ]
        var puntaje=0;
        var puntajeTexto;
        var vidas;
        var vidasTexto;
        var textoPrincipal;
		var cursores;
        var teclaEnter;
        var juegoEstado;
        var nivel=1;
        var nivelTexto;
        var resistencia=2;

        /* configuración inicial del juego*/
        
        function juegoInicio(){
		   puntaje=0;
		   puntajeTexto.setText(`Puntaje: ${puntaje}`); //texto de nivel en pantalla
		   vidas=3;
		   vidasTexto.setText(`Vidas: ${vidas}`);
		   nivel=1;
		   //resistencia=1; //resistencia del bloque
		   nivelTexto.setText(`Nivel: ${nivel}`);
		   bloque.children.iterate(function(child){
		   child.enableBody(true,child.x,child.y,true,true)
	   }); //iteración de los bloques en forma separada
	   pelota.enableBody(true,0,0,true,true); //habilitación de la pelota.
		
	   }
	   
	   /* Inicialización del nivel */
	   
		 function juegoNivel(){
			 
		   puntaje=puntaje;
		   puntajeTexto.setText(`Puntaje: ${puntaje}`);
		   vidas=vidas;
		   vidasTexto.setText(`Vidas: ${vidas}`);
		   nivel=nivel;
		   nivelTexto.setText(`Nivel: ${nivel}`);
		   //resistencia=resistencia;
		   bloque.children.iterate(function(child){
		   child.enableBody(true,child.x,child.y,true,true)
	   });
	   pelota.enableBody(true,0,0,true,true);
		
	   }
	   
	   /* jugabilidad lista*/
	   
	   function juegoListo(){
		   juegoEstado=1; //estado de juego esperando inicio.
		   pelota.setVelocity(0,0); //inicio con pelota detenida
		   pelota.setX(paleta.x); //ubicación de pelota en X con respecto a la paleta.
		   pelota.setY(paleta.y-paleta.body.height/2-pelota.height/2); //ubicación de pelota en Y
		   if(nivel===4){
			   textoPrincipal.setText(`¡Ganaste!`);//Si el jugador alcanza el nivel cuatro, aparece el texto "¡Ganaste!"
		   } else {
		   textoPrincipal.setText(`Nivel ${nivel} Presione Espacio`); //En caso contrario, aparece el texto "¡Presione Espacio!"
			}
		   textoPrincipal.setVisible(true);//El texto principal se establece como visible.
	   }
	   
	   /* partida iniciada */
	   function juegoEjecutando(){
		   juegoEstado=2; //estado de juego: jugando.
		   pelota.setVelocity(10,-200); //velocidad de pelota.
		   textoPrincipal.setVisible(false); //El texto principal se oculta.
	   }
	   
	   /* Juego terminado */
	   
	   function juegoTerminado(text){
		   juegoEstado=3; //estado de juego: terminado.
		   textoPrincipal.setText(text); 
		   textoPrincipal.setVisible(true); //esto
		   pelota.disableBody(true);
	   }
        

class Escena extends Phaser.Scene{


		/* carga de imágenes*/
	preload ()
    {
        this.load.image('fondo', 'imagenes/cave.jpeg');
        this.load.image('punto', 'imagenes/punto.png');
        this.load.image('estrella','imagenes/estrella.png');
        this.load.image('paleta','imagenes/paleta.png');
        this.load.image('pelota','imagenes/pelota.png');
        this.load.image('bloque','imagenes/bloque.png');

    }

/* creación de escenario*/
    create ()
    {
		
		
        this.add.image(400, 300, 'fondo'); //imagen de fondo

		paleta = this.physics.add.image(400,500,'paleta'); //paleta con física
        paleta.setCollideWorldBounds(true); //establecimiento de coliciones de los márgenes con la paleta
        paleta.body.immovable=true; //La paleta no es alterada por las coliciones
                        
        pelota = this.physics.add.image(400,478,'pelota'); //pelota con física.
        pelota.setVelocity(20-200); //velocidad de pelota.
        pelota.setCollideWorldBounds(true);//Configuración de colicion entre paleta y márgenes.
        pelota.setBounce(1,1); //rebote de pelota sin pérdida.
        this.physics.world.checkCollision.down=false; //Se quita colición con el margen inferior
        

       bloque=this.physics.add.group(); //fisicas para los bloques.
       generarBloques(); //generación de bloques.
       
       puntajeTexto=this.add.text(15,15, `puntaje:0`, {fontSize:'32px',fill: '#fff'}); //texto de puntaje
       vidasTexto=this.add.text(15,550, `vidas:3`, {fontSize:'32px',fill: '#fff'}); //texto de vida
       nivelTexto=this.add.text(juegoAncho-200,550, `nivel:0`, {fontSize:'32px',fill: '#fff'}); //texto de nivel
       textoPrincipal=this.add.text(juegoAncho/2,juegoAlto/2, `Presione Espacio`, {fontSize:'50px',fill: '#fff'}); //texto principal
       textoPrincipal.setOrigin(.5); //centrado de texto principal de acuerdo a su tamaño.
       
       cursores=this.input.keyboard.createCursorKeys(); //variable para las teclas de movimiento.
       teclaEnter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE); //tecla espaciadora
       
       this.physics.add.collider(pelota,paleta, collidePelotaPaleta); //colisión entre pelota y paleta
       this.physics.add.collider(pelota,bloque, collidePelotaBloques);//colisión de pelota y bloques.
       
       juegoInicio(); //inicialización del Inicio de Juego.
       juegoListo(); //inicialización del juego Listo.
       
       /* Generador de bloques */
       
       function generarBloques(){ 
		var rows=bloqueArreglo.length; //filas
		var cols= bloqueArreglo[0].length; //columnas
		var bloqueTamano = 40; //distancia entre 
		var resistencia=resistencia; //
		var offsetX=(juegoAncho - cols*bloqueTamano)/2 + bloqueTamano/2
		var offsetY=juegoAlto * 0.1
		
		for (var i = 0; i<rows;i++){
			for (var j=0;j<cols;j++){
				if(bloqueArreglo[i][j]==='1'){
					bloque.create(j*bloqueTamano+offsetX, i*bloqueTamano + offsetY,'bloque',resistencia)
				}
			}
		}
		
		bloque.children.iterate(function(child){
			child.body.immovable=true;
			
		})
	}
	
       /* Colisión entre pelota y paleta */
       
       function collidePelotaPaleta(pelota,paleta){
		   var newVelocity=pelota.body.velocity.x+paleta.body.velocity.x;
		   if(Math.abs(newVelocity)>200){
			   newVelocity=paleta.body.velocity.x;
		   }
		   var perdida=paleta.body.velocity.x*Math.random()*10/100;
		   newVelocity -= perdida;
		   pelota.setVelocityX(newVelocity);
	   }

		function collidePelotaBloques(pelota,bloque){
			resistencia = resistencia;
			resistencia--;
			if(resistencia===0){
			bloque.disableBody(true,true);
			puntaje++;
			puntajeTexto.setText(`Puntaje: ${puntaje}`);
			} else {
			}
			
		   
	   }
	   
    }

    update()
    {
		resistencia=1;
		
		paleta.setVelocityX(0);
		if(cursores.left.isDown){
			paleta.setVelocityX(-200);
		} else if(cursores.right.isDown){
			paleta.setVelocityX(200);
		}
		
		if (juegoEstado===1){
			
			pelota.setX(paleta.x)
		}
		
		if (juegoEstado===1){
			if(cursores.space.isDown){
				juegoEjecutando();
			}
			
		} else if(juegoEstado===2){
			if (pelota.body.y>juegoAlto){
				vidas--;
				vidasTexto.setText(`Vidas: ${vidas}`);
				if(vidas>0){
					juegoListo();
				} else {
					juegoTerminado('Juego Terminado');
				}
			} if(bloque.countActive()===0){
				juegoTerminado('Nivel Siguiente');
				nivel++;

				nivelTexto.setText(`Nivel: ${nivel}`);
				juegoNivel();
				resistencia++;

				juegoListo();


			}
			
			else if(nivel===4){
				juegoTerminado('Ganaste');

			}
			
			
		
		} else if(juegoEstado===3){
			if (teclaEnter.isDown){
				juegoInicio();
				juegoListo()
			}
		}
		
	}
}



export default Escena;

