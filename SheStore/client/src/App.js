import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Homepage from './Pages/Homepage';
import StorePage from './Pages/Store';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <StorePage/>
      <Footer/>
    </div>
  );
}

export default App;
