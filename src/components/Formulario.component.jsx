import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {



    const [cita, setCita] = useState({
        mascota         : '',
        propietario     : '',
        fecha           : '',
        hora            : '',
        sintomas        : '',
    })

    const [ error, setError] = useState(false);

    const handleChange = ( event ) => {

       setCita({
        ...cita,
        [event.target.name] : event.target.value
       })

    }

    const agregarCita = ( event ) =>{
        event.preventDefault()

        let validate = mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '';
    
        if( validate ){
            setError(true)
            return ;
        }
        setError(false); 
        cita.id = uuidv4();
        crearCita(cita);
        setCita({
            mascota         : '',
            propietario     : '',
            fecha           : '',
            hora            : '',
            sintomas        : '',
        })
    }

    const {mascota,propietario,fecha,hora,sintomas} = cita;



    return (
        <Fragment>
            <h2>Crear Cita</h2>
            { error ? <p className="alerta-error"> Todos los campos son obligatorios </p> : null }
            <form
                onSubmit= { agregarCita }
            >
                <label>Nombre de la mascota</label>
                <input 
                    type="text" 
                    name="mascota" 
                    className="u-full-width" 
                    placeholder="nombre de la mascota" 
                    onChange={ handleChange }
                    value = { mascota }
                />
                <label>Nombre del dueño</label>
                <input 
                    type="text" 
                    name="propietario" 
                    className="u-full-width" 
                    placeholder="nombre del dueño de la mascota" 
                    onChange={ handleChange }
                    value = { propietario }
                />
                <label>Fecha(registro)</label>
                <input 
                    type="date" 
                    name="fecha" 
                    className="u-full-width" 
                    onChange={ handleChange }
                    value = { fecha }
                />
                <label>Hora(registro)</label>
                <input 
                    type="time" 
                    name="hora" 
                    className="u-full-width" 
                    onChange={ handleChange }
                    value = { hora }
                />
                <label>Sintomas(descripción)</label>
                <textarea 
                    name="sintomas" 
                    className="u-full-width"
                    onChange={ handleChange }
                    value = { sintomas }
                />
                <button type="submit" className="u-full-width button-primary">
                    Agregar Cita
                </button>
            </form>
        </Fragment>
    );
};

Formulario.propTypes = {
    crearCita : PropTypes.func.isRequired
}

export default Formulario;
