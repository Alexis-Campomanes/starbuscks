import React from 'react';
import './AccStart.scss';
import acc from '../Assets/mujer-acumula-estrellas.gif';
import pagement from '../Assets/valor-estrellas-simbolo.png';

const AccStart = () => {
    return (
        <section className='acc-start'>
          <div className='acc-conteiner'>
            <img src={ acc } alt="Not fount" />
            <div className='acc-text'>
              <h4>Acumula Estrellas en cada visita</h4>
              <p>Obtén una Estrella por cada S/ 2 de compra</p>
              <img src={ pagement } alt="Not fount" />
              <p>Disfruta grandes recompensas y sí, café gratis</p>
            </div>
          </div>
          
        </section>
    );
}

export default AccStart;
