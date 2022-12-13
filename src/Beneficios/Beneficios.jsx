import React from 'react';
import './Beneficios.scss';
const Beneficios = ({shot, title}) => {
    return (
        <div className='beneficios'>
          <img src={ shot } alt="Not Found" />
          <span>{ title }</span>
        </div>
    );
}

export default Beneficios;
