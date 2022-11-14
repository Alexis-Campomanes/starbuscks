import React from 'react';
import './BebidasConteiner.scss';


const BebidasConteiner = ({ img, text }) => {
    return (
        <div className='bebidas-conteiner'>
          <picture>
            <img 
            className='bc-img'
            src={ img } alt="" />
            <p className='bc-text'>{ text }</p>
          </picture>
        </div>
    );
}

export default BebidasConteiner;
