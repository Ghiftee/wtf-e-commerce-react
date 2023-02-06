import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Firstpage from './Components/Navbar/Firstpage';
import Promos from './Components/promos-section/Promos';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Firstpage/>
      <Promos/>
      <Footer/>
    </div>
  );
}

export default App;
