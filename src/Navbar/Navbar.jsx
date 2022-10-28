import React from 'react';
import './Navbar.scss';
import logo from '../Assets/logo.png';
import shopping from '../Assets/shopping.png';
import { UilSearch } from '@iconscout/react-unicons';
import { UilMapMarker } from '@iconscout/react-unicons';
import { UilAngleDown } from '@iconscout/react-unicons';
import CallIcon from '@mui/icons-material/Call';

const Navbar = () => {
  return (
    <div className='navbar'>
     <img src={ logo } alt="not fount" />
    
      <div className='search'>
        <input type="text" placeholder='Buscar...' />
        <UilSearch style={{
          color: '#1e3932'
        }}/>
      </div>
      <div className='locate'>
        <div className='ubicacion'>
          <UilMapMarker/>
          <span>¿Cómo deseas recibir tu pedido?</span>
          <UilAngleDown/>
        </div>
        <hr />
      </div>
      <div className='delivery'>
        <div>
          <div className='call'>
          <CallIcon style={{
            color:'#ffffff',
            fontSize: '30px',
          }}/>
          </div>
          <div className='call-number'>
            <p>Delivery</p>
            <p>(01)505-0050</p>
          </div>
        </div>
          <div className='shopping'>
            <img src={ shopping } alt="not fount" />
            <span>s/ 0.00</span>
          </div>
      </div>
     
     
    </div>
  );
}

export default Navbar;
