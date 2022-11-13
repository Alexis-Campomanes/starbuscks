import React from 'react';
import './Bebidas.scss'
import BebidasConteiner from './BebidasConteiner/BebidasConteiner';
import freppuccino from '../Assets/ULTIMATE_CARAMEL_FRAPP_V3.png';
import late from '../Assets/LATTE_MACHIATTO_V3.png';
import machiato from '../Assets/CARAMEL_MACCHIATO_HELADO_V3.png';
import chocolate from '../Assets/CHOCOLATE_CALIENTE_V3.png';
import frias from '../Assets/STRAWBERRY_GREEN_TEA_V3.png';
import shaken from '../Assets/ICED_AVELLANA_OATMILK_SHAKEN_ESPRESSO_V1.png'
import BebidasTitle from './BebidasTitle/BebidasTitle';
import muffin from '../Assets/MUFFIN_DE_NARANJA_Y_CHOCOCHIPS_V3.png';
import postre from '../Assets/CHEESECAKE_DE_CHOCOLATE_V3.png';
import sandwich from '../Assets/SANDWICH_DE_PAVITA_Y_QUESO_V3.png';
import pack from '../Assets/PACK_ANTOJOS_V3.png';
import desayuno from '../Assets/DESAYUNO_PARA_DOS_V4.png';
import coffe from '../Assets/CAFE_PERU_250GR_V2.png';


const Bebidas = () => {
    return (
        <div className='bebidas'>
            <BebidasTitle 
              title = 'bebidas'
            />
          <div className='list-bebidas'>
            <BebidasConteiner 
            img =  {freppuccino}
            text= 'Frappuccinos ®'
            />
            <BebidasConteiner
            img = {late}
            text = 'Espresso Caliente'
            />
            <BebidasConteiner 
              img = { machiato }
              text = 'Espresso Frío'
            />
            <BebidasConteiner 
              img = { chocolate }
              text = 'Otras bebidas calientes'
            />
            <BebidasConteiner 
              img = {frias}
              text = 'Otras bebidas frías'
            />
            <BebidasConteiner 
              img = { shaken }
              text = 'Shaken Espresso'
            />
          </div>
            <BebidasTitle 
              title = 'alimentos'
            />  
            <div className='list-bebidas list-alimentos'>
              <BebidasConteiner 
                img = { muffin }
                text = 'Pastries'
              />
              <BebidasConteiner 
                img = { postre }
                text = 'Postre'
              />
              <BebidasConteiner 
                img = { sandwich }
                text = 'Sandwiches'
              />
            </div>
            <BebidasTitle 
              title = 'packs y boxes'
            />
            <div className='list-bebidas'>
              <BebidasConteiner
                img = { pack }
                text = 'Antojo de la tarde'
               />
               <BebidasConteiner 
                  img = { desayuno }
                  text = 'Desayunos'
               />
            </div>
              <BebidasTitle 
                title = 'merch y café en grano'
              />
              <BebidasConteiner 
                img = { coffe }
                text = 'Café en Grano'
              />
          
        </div>
    );
}

export default Bebidas;
