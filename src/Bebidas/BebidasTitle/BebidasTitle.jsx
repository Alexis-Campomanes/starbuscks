import React from 'react';
import './BebidasTitle.scss';

const BebidasTitle = ({title}) => {
    return (
        <div className='t-bebidas'>
            <h1 className='b-title'>{ title }</h1>
        </div>
    );
}

export default BebidasTitle;
