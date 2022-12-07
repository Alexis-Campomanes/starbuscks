import React from 'react';
import './Mission.scss';
import cafe from '../Assets/cafe.png';
import partners from '../Assets/partner.png';
import tienda from '../Assets/tienda.png';
import ambiente from '../Assets/medio_ambiente.png'

const Mission = () => {
    return (
        <div className='mission'>
          <div className='m-enlace'>
            <span>Starbucks</span>
            <span>></span>
            <span> Nuestra Misión</span>  
          </div>
          <h1 className='m-title'>nuestas misión</h1>
              <section>
                <p className='c-4'></p>
                <span className='m-humano'>
                  Inspirar y nutrir el espíritu humano: Una persona, una taza de café y una comunidad a la vez. 
                </span>
              </section>
                <p className='m-parrafo'>
                  Estos son los principios que rigen el cumplimiento de nuestra misión día a día:
                </p>
                <h2 className='m-subtitle'>
                  Nuestro café
                </h2>
                <span>
                  Siempre ha sido y será una cuestión de calidad. Nos apasiona saber que tenemos un compromiso socialmente, responsable con los proveedores de los mejores granos de café, esmerarnos en tostar los granos y mejorar la vida de la gente que los cultiva. Nuestro profundo interés en todos estos aspectos hace que nuestro trabajo jamás termine.
                </span>
                <img className='m-img'
                    src={ cafe } 
                    alt="not fount"
                />
                  <h2 className='m-subtitle'>
                    Nuestro partners
                  </h2>
                    <span>
                      Se nos llama partners, por que lo que hacemos no es sólo un trabajo, es nuestra pasión. Juntos, adoptamos la diversidad para crear un lugar que nos permita a cada uno ser auténtico. Siempre nos tratamos con respeto y dignidad. Nos valoramos de acuerdo a este principio.
                    </span>
                    <img className='m-img'
                      src={ partners } 
                      alt="not fount" 
                    />
                      <h2 className='m-subtitle'>
                        Nuestro clientes 
                      </h2>
                      <span>
                        Cuando nos entregamos de lleno a lo que hacemos, nos relacionamos con nuestros clientes, reímos con ellos y les levantamos el ánimo, aunque sea por un instante. Es cierto que comenzamos nuestro trabajo con la promesa de una bebida preparada a la perfección, pero es mucho más que eso. En realidad, se trata de relacionarnos con las personas.
                      </span>
                        <h2 className='m-subtitle m-subadd'>
                          Nuestras tiendas
                        </h2>
                        <span>
                          Cuando nuestros clientes logran experimentar esta sensación de pertenencia, nuestras tiendas pasan a ser un refugio, un alto a las preocupaciones de fuera, un lugar para reunirse con los amigos. Se trata de disfrutar al mismo ritma la vida: a veces pausando y con tiempo para saborearlo, otras veces más acelerado, pero siempre rodeados de auténtico calor humano.
                        </span>
                        <img className='m-img'
                          src={ tienda } 
                          alt="not fount"
                        />
                          <h2 className='m-subtitle'>
                            Nuestra comunidad
                          </h2>
                          <span>
                            Cada tienda forma parte de una comunidad, y tomamos en serio nuestra responsabilidad como buenos vecinos. Queremos ser bienvenidos dondequiera que hagamos negocios. Somos capaces de contribuir positivamente por que trabajamos para conseguir una unión entre partners, clientes y comunidad para cooperar cada día a día. Ahora nos damos cuenta de que la dimensión de nuestra responsabilidad y nuestro potencial para hacer el bien son aún mayores que antes. Una vez más, el mundo espera que Starbucks dicte la nueva pauta. Seremos líderes.
                          </span>
                            <h2 className='m-subtitle m-subadd'>
                              Nuestras accionistas
                            </h2>
                            <span>
                              Sabemos que cuando cumplimos con estas áreas, cosecharemos el mismo éxito que recompensa a nuestros accionistas. Responderemos íntegramente por la perfección de cada uno de estos elementos, para que Starbucks, y todos los que se relacionan con nosotros, podamos perdurar y prosperar.
                            </span>
                              <h2 className='m-subtitle'>
                                Declaración de misión sobre el medio ambiente
                              </h2>
                              <span>
                                En Starbucks tenemos el compromiso de desempeñar una función de liderazgo medioambiental en todas las facetas de nuestro negocio.
                              </span>
                              <img className='m-img'
                              src={ ambiente } 
                              alt="not fount" 
                              />


        </div>
    );
}

export default Mission;
