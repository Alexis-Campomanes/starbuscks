import React from 'react';
import './Rewards.scss';
import marcador from '../Assets/marcador.png';
import letras from '../Assets/logo-letras.png';
import Beneficios from '../Beneficios/Beneficios';
import imagen1 from '../Assets/bebida-adicional.png';
import imagen2 from '../Assets/bebida-estrellas.png';
import imagen3 from '../Assets/bebida-cumpleaños.png';
import imagen4 from '../Assets/App Starbucks - Bebida Cumpleaños verde.jpg';
import start from '../Assets/star.png';
import imagen5 from '../Assets/refill-cafe.png';
import imagen6 from '../Assets/cambio-cafe.png';
import imagen7 from '../Assets/invitaciones.png';
import AccStart from '../AccStart/AccStart';
import Registrar from '../Registar/Registrar';


const Rewards = () => {
    return (
        <div className='mission m-rewards'>
          <div className='r-mission'>
            <img className='marcador'
            src={ marcador } 
            alt="Not fount" 
            />
            <p className='m-green'>
              Holaaaaa, café gratis
            </p>
            <img className='m-starbucks'
            src={ letras } 
            alt="Not fount" 
            />
            <span className='m-registrate'>
              ¡Regístrate, disfruta de tus bebidas favoritas y acumula Estrellas!
            </span>
            <button className='m-button'>descargar la app starbucks perú</button>
          </div>
          <div className='r-beneficios'>
            <div className='r-text'>
              <div>
                <span>
                  Disfruta de todos los beneficios al hacerte miembro Starbucks Rewards
                </span>
              </div>
              <div>
                <span>
                  Al registrarte inicias en nivel Green, y podrás canjear los siguientes beneficios:
                </span>
              </div> 
            </div>
            <div>
              <Beneficios 
                shot={ imagen1 }
                title= 'Shot gratis adicional en tu bebida'
              />
            </div>
            <div>
              <Beneficios 
                shot={ imagen2 }
                title= 'Bebida Alta gratis por cada 100 estrellas'
              />
            </div>
            <div>
              <Beneficios 
                shot={ imagen3 }
                title= 'Bebida gratis Alta en el mes de tu cumpleaños'
              />
            </div>
            <div>
              <Beneficios 
                shot={ imagen4 }
                title= 'Bebida gratis Alta por la compra de café en grano'
              />
            </div>
            <div className='add-start'>
              <span>
                Al acumular 200 estrellas, pasas a nivel Gold y podrás acceder a estos beneficios adicionales: <img className='b-start' src={ start } alt="" />
              </span>
            </div>
            <div>
                <Beneficios 
                  shot={ imagen5 }
                  title= 'Refill de café del día o Té'
                />
            </div>
            <div>
                <Beneficios 
                  shot={ imagen6 }
                  title= 'Cambio de café espreso por café de temporada gratis'
                />
            </div>
            <div>
                <Beneficios 
                      shot={ imagen7 }
                      title= 'Invitaciones a eventos especiales'
                    />
            </div>  
          </div>
          <div>
            <AccStart />
          </div>
          <div>
            <Registrar />
          </div>

        </div>
    );
}

export default Rewards;
