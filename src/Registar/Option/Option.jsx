import React from 'react';
import './Option.scss';
const Option = ({option, description}) => {
    return (
        <div className='option'>
          <div className='o-conteiner'>
            <div>
              <img className='o-img' src={ option } alt="not found" />
            </div>
            <div className='o-text'>
              <span>
                { description }
              </span>
            </div>
          </div>
          <hr className='o-hr'/>
        </div>
    );
}

export default Option;
