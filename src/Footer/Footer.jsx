import React from 'react';
import Email from './Email/Email';
import './Footer.scss';
import logo from '../Assets/logo.png';
import Nosotros from './Nosotros/Nosotros';
import Followers from './Followers/Followers';

const Footer = () => {
    return (
        <div className='footer'>
          <hr />
          <img
          className='f-img'
          src={ logo } 
          alt="Not Fount" />
          <Email />
          <Nosotros />
          <Followers />
        </div>
    );
}

export default Footer;
