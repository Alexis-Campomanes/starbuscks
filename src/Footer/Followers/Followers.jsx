import React from 'react';
import './Followers.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Followers = () => {
    return (
        <div className='followers'>
          <div className='f-redes'>
            <FacebookIcon  
              fontSize={'large'}
            />
            <InstagramIcon
              fontSize={'large'}     
            />
          </div>
          <div className='f-text'>
            <span>©2022 Lasino. Todos los Derechos Reservados.</span>
          </div>
            
        </div>
    );
}

export default Followers;
