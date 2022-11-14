import './App.scss';
import Bebidas from './Bebidas/Bebidas';
import Footer from './Footer/Footer';
import Lista from './Navbar/Lista/Lista';
import Navbar from './Navbar/Navbar';
import Pedido from './Navbar/Pedido/Pedido';
import Shots from './Shots/Shots';
import Slide from './Slide/Slide';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Pedido />
      <Lista />
      <Slide />
      <Shots />
      <Bebidas />
      <Footer />
    </div>
  );
}

export default App;
