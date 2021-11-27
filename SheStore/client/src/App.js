import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Homepage from './Pages/Homepage';
import LoginForm from './Pages/Login';
import StorePage from './Pages/Store';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <StorePage/>
      <LoginForm/>
      <Footer/>
    </div>
  );
}

export default App;
