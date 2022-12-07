import React from 'react';
import './Rewards.scss';
import marcador from '../Assets/marcador.png';
import letras from '../Assets/logo-letras.png';


const Rewards = () => {
    return (
        <div className='mission m-rewards'>
          <div className='r-mission'>
            <img className='marcador'
            src={ marcador } 
            alt="Not fount" 
            />
            <p className='m-green'>
              Holaaaaa, café gratis
            </p>
            <img className='m-starbucks'
            src={ letras } 
            alt="Not fount" 
            />
            <span className='m-registrate'>
              ¡Regístrate, disfruta de tus bebidas favoritas y acumula Estrellas!
            </span>
            <button className='m-button'>descargar la app starbucks perú</button>
          </div>
        </div>
    );
}

export default Rewards;
