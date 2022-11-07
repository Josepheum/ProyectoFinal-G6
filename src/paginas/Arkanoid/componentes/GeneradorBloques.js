import Phaser from 'phaser';

class GenerarBloques extends Phaser.Escene{

	constructor(){
		super("generarBloques");
		}
		
		
		
		generarBloques(){
			
			var juegoAncho=800;
			var juegoAlto=600;
			var bloque;
			var bloqueArreglo=[
			'01'
        ]
			
			
		var rows=bloqueArreglo.length;
		var cols= bloqueArreglo[0].length;
		var bloqueTamano = 32;
		var resistencia=1;
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
}

export default GenerarBloques;



