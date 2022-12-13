import React from 'react';
import Option from './Option/Option';
import './Registrar.scss';
import descarga from '../Assets/01-descarga.png';

const Registrar = () => {
    return (
        <div className='registrar'>
          <div className='r-conteiner'>
            <h4>
              Ser parte de Starbucks Rewards es muy fácil
            </h4>
            <p>
              ¡Comienza a acumular estrellas desde la Starbucks App!
            </p>
          </div>
          
          <div>
            <Option 
              option={ descarga }
              description = 'Descarga la Starbucks App y registrate en el programa'
            />
          </div>
        </div>
    );
}

export default Registrar;
