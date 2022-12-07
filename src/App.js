import './App.scss';
import Bebidas from './Bebidas/Bebidas';
import Corporativo from './Corporativo/Corporativo';
import Footer from './Footer/Footer';
import Mission from './Mission/Mission';
import Layout from './Page/Layout/Layout';
import Rewards from './Rewards/Rewards';
import Shots from './Shots/Shots';
import Slide from './Slide/Slide';


function App() {
  return (
    <div className="App">
      <Layout />
      <Rewards />
      <Footer />
    </div>
  );
}

export default App;
