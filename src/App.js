import './App.css';
import Navbar from './components/Navbar/Navbar';
import Firstpage from './components/Navbar/Firstpage';
import Promos from './components/promos-section/Promos';
import Offers from './components/Offers/Offers';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Firstpage/>
      <Promos/>
      <Offers />
      <Footer/>
    </div>
  );
}

export default App;
