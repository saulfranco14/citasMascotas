import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario.component';
import Citas from './components/Citas.component';

function App() {
	
	let citasIniciales = JSON.parse( localStorage.getItem('citas') );

	if(!citasIniciales) {
		citasIniciales =[];
	}

	const [ view, setView] = useState([]);

	useEffect ( () => {

		let citasIniciales = JSON.parse( localStorage.getItem('citas') );

		if(citasIniciales) { 
			localStorage.setItem( 'citas', JSON.stringify(view) )
		}else{
			localStorage.setItem( 'citas', JSON.stringify([]) ) ;
		}
			
	}, [view]);

	const crearCita = cita => {
		setView([
			...view,
			cita
		]);
	}

	const eliminarCita = ( id ) => {
		const nuevasCitas = view.filter( cita => cita.id !== id );
		setView(nuevasCitas);
	}

	const titulo = 	view.length === 0 ? 'No hay citas' : 'Administra tus citas';

	return (
		<Fragment>
			<h1>Administrador de pacientes</h1>
			<div className="container">
				<div className="row">
          <div className="one-half column">
            <Formulario
				crearCita = {crearCita}
			/>
          </div>
          <div className="one-half column">
				<h2>{titulo}</h2>
				{view.map(cita => (
						<Citas	
							key	= {cita.id}
							cita ={ cita }
							eliminarCita = { eliminarCita }
						/>
					))
				}
          </div>
        </div>
			</div>
		</Fragment>
	);
}

export default App;
