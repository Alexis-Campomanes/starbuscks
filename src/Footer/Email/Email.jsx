import React from 'react';
import './Email.scss'

const Email = () => {
    return (
        <div className='email'>
          <form>
            <label>
              <span>¿Quieres estar al tanto de nuestras promociones y beneficios?</span>
              <p>¡Déjanos tu correo!</p>
              <input type="text" />
              <button>suscribirme</button>
            </label>
          </form>
        </div>
    );
}

export default Email;
