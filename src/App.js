import './App.css';
import Navbar from './Components/Navbar'
import './index.css'

import Firstpage from './Components/Firstpage'
import PromoSection from './Components/promos-section/Promos'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Firstpage/>
      <PromoSection/>
      
    </div>
  );
}

export default App;
