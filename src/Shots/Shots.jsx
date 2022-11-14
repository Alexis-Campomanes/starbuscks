import React from 'react';
import './Shots.scss';
import banner1 from '../Assets/rewards_v2.png';
import banner2 from '../Assets/home_V1 (1).png';

const Shots = () => {
    return (
        <div className='shots'>
          <img 
          className='s-img'
          src={ banner1 } 
          alt="Not fount" />
          <img
          className='s-img'
          src={ banner2 } 
          alt="Not fount" />
        </div>
    );
}

export default Shots;
