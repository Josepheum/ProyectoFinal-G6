import Phaser from 'phaser';

	var plataformas;
	var jugador;
	var cursores;
	var estrellas;
	var bombas;
	var puntaje=0;
	var textoPuntaje;
	var juegoTerminado;
	var textoJuegoTerminado;
	

function recogerEstrella(jugador,estrella)
	{
		estrella.disableBody(true,true);
		puntaje += 10;
		textoPuntaje.setText('Puntaje:' + puntaje);
		
		if (estrellas.countActive(true)===0)
		{estrellas.children.iterate(function(child){child.enableBody(true,child.x, 0,true,true)});
			var x=(jugador.x<400)? Phaser.Math.Between(400,800):
			Phaser.Math.Between(400,800);
			
			var bomba=bombas.create(x,16, 'bomba');
			bomba.setBounce(1);
			bomba.setCollideWorldBounds(true);
			bomba.setVelocity(Phaser.Math.Between(-200,200), 20);
			
		}
	}
	
function tocarBomba(jugador,bomba)
{
	this.physics.pause();
	jugador.setTint(0xff0000);
	jugador.anims.play('vuelta');
	juegoTerminado=true;
	
	textoJuegoTerminado=this.add.text(200,300, 'Juego Terminado',{fontSize:'42px',fill:'rgb(255,255,255)'});
	

	
	
	};

class Escena extends Phaser.Scene{


	

	


		/* carga de imágenes*/
	preload ()
    {
        this.load.image('cielo', 'accesorios/cielo.png');
        this.load.image('estrella', 'accesorios/estrella.png');
        this.load.image('plataforma','accesorios/plataforma.png');
        this.load.image('bomba','accesorios/bomba.png');
        this.load.spritesheet('dude','accesorios/dude.png', {frameWidth:32,frameHeight:48});
        

    }

/* creación de escenario*/
    create ()
    {
		
		
     this.add.image(400, 300, 'cielo'); //imagen de fondo
          
     plataformas= this.physics.add.staticGroup();
     
     plataformas.create(400,568,'plataforma').setScale(2).refreshBody();
     
     plataformas.create(600,400, 'plataforma');
     plataformas.create(50, 250,'plataforma');
     plataformas.create(750,200,'plataforma');
     

	jugador= this.physics.add.sprite(100,450,'dude');
	
	jugador.setBounce(.2);
	jugador.setCollideWorldBounds(true);
	
	
	
	this.anims.create({
		key:'izquierda',
		frames: this.anims.generateFrameNumbers('dude', {start:0,end:3}),
		frameRate:10,
		repeat:-1
	});
	
	this.anims.create({
		key:'vuelta',
		frames: [{key:'dude',frame:4}],
		frameRate:20,
	});
	
	this.anims.create({
		key:'derecha',
		frames: this.anims.generateFrameNumbers('dude', {start:5,end:8}),
		frameRate:10,
		repeat:-1
	});
	
	jugador.body.setGravityY(300);
	this.physics.add.collider(jugador, plataformas);
	
	cursores=this.input.keyboard.createCursorKeys();
	
	estrellas=this.physics.add.group({
		 key:'estrella',
		 repeat: 11,
		 setXY:{x:12,y:0,stepX:70}
	 });
	 
	 estrellas.children.iterate(function (child) {child.setBounceY(Phaser.Math.FloatBetween(0.4,.8))});
	 this.physics.add.collider(estrellas, plataformas);
	 this.physics.add.overlap(jugador, estrellas, recogerEstrella,null,this);
	 
	 textoPuntaje=this.add.text(16,16,'Puntaje:' + puntaje,{fontSize:'32px', fill: 'rgb(255,255,255)'});
	 
	 
	 bombas= this.physics.add.group();
	 this.physics.add.collider(bombas,plataformas);
	 this.physics.add.collider(jugador,bombas,tocarBomba,null,this);
	 
	 

    }


    update()
{
		
	if (cursores.left.isDown)
	{
		jugador.setVelocityX(-160);

		jugador.anims.play('izquierda', true);
	}
	else if (cursores.right.isDown)
	{
		jugador.setVelocityX(160);
		jugador.anims.play('derecha', true);
	}
	else
	{
		jugador.setVelocityX(0);
		jugador.anims.play('vuelta');
	}

	if (cursores.up.isDown && jugador.body.touching.down)
	{
		jugador.setVelocityY(-500);
	}
	
}
	

	
}



export default Escena;

