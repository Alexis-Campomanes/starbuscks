import React from 'react';
import Lista from '../../Navbar/Lista/Lista';
import Navbar from '../../Navbar/Navbar';
import Pedido from '../../Navbar/Pedido/Pedido';
import './Layout.scss';

const Layout = () => {
    return (
        <div className='layout'>
          <Navbar />
          <Pedido />
          <Lista />
        </div>
    );
}

export default Layout;
