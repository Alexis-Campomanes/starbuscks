import React from 'react';
import './Pedido.scss';
import { UilLocationPoint } from '@iconscout/react-unicons';
import { UilAngleDown } from '@iconscout/react-unicons'

const Pedido = () => {
    return (
        <div className='pedido'>
          <UilLocationPoint />
          <span>¿Cómo deseas recibir tu pedido?</span>
          <UilAngleDown />
        </div>
    );
}

export default Pedido;
