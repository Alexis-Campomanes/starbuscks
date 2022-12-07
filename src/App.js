import './App.scss';
import Bebidas from './Bebidas/Bebidas';
import Footer from './Footer/Footer';
import Mission from './Mission/Mission';
import Layout from './Page/Layout/Layout';
import Shots from './Shots/Shots';
import Slide from './Slide/Slide';


function App() {
  return (
    <div className="App">
      <Layout />
      <Mission />
      <Footer />
    </div>
  );
}

export default App;
