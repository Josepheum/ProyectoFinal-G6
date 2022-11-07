import logo from './logo.svg';
import './Integrantes.css';
import DatosIntegrantes from './DatosIntegrantes'
import './Juego.css';
import './DatosIntegrantes.css';



function Integrantes() {
  return (
	<body className="cuerpo">
			<div className="juego">
				<header className="encabezado">
					<h1 className="titulo"> Integrantes </h1>
				
			

				</header>
				
				<div className="App">
					<div className="container">
						<DatosIntegrantes />
				</div>
				</div>
    	
			</div>
				

	</body>
	
	

  );
}

export default Integrantes;
