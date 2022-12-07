import React from 'react';
import './Corporativo.scss'

const Corporativo = () => {
    return (
        <div className='corporativo'>
          <div className='m-enlace'>
            <span>Starbucks</span>
            <span>></span>
            <span>Ventas Corporativas</span>  
          </div>
            <h1 className='m-title'>
              ventas corporativas
            </h1>
            <div className='c-text'>
              <span>
                Para mayor información sobre vales y ventas corporativas comuníquese con nosotros a:
              </span>
              <span>
                VentasCorporativas@franquiciasperu.com
              </span>
            </div>  
        </div>
    );
}

export default Corporativo;
