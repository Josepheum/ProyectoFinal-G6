export function mostrarNotificacion(setter) {
	setter(true);
	setTimeout(()=> {
		setter(false);
	}, 2000);
}

export function controlarJuegoGanado(correcto, equivocado, palabra) {
	let estado = 'gana';
	palabra.split('').forEach(letra =>{
		if(!correcto.includes(letra)){
			estado='';
		}
	});
	
	if(equivocado.length === 7) estado = 'pierde';
	return estado;
}
