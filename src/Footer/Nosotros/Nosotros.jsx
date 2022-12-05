import React from 'react';
import './Nosotros.scss';

const Nosotros = () => {
    return (
        <div className='nosotros'>
          <div className='sobre-n'>
            <div className='n-text'>
              <span>sobre nosotros</span>
            </div>
            <div className='n-add'>
              <span>+</span>
            </div>   
          </div>
          <div className='sobre-n'>
            <div className='n-text'>
              <span>starbucks rewards</span>
            </div>
            <div className='n-add'>
              <span>+</span>
            </div>   
          </div>
          <div className='sobre-n'>
            <div className='n-text'>
              <span>contacto atención al cliente</span>
            </div>
            <div className='n-add'>
              <span>+</span>
            </div>   
          </div>
          <div className='sobre-n'>
            <div className='n-text'>
              <span>políticas y términos</span>
            </div>
            <div className='n-add'>
              <span>+</span>
            </div>   
          </div>
        </div>
    );
}

export default Nosotros;
