import './App.scss';
import Lista from './Navbar/Lista/Lista';
import Navbar from './Navbar/Navbar';
import Pedido from './Navbar/Pedido/Pedido';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Pedido />
      <Lista />
    </div>
  );
}

export default App;
