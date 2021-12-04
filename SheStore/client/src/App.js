import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Homepage from './Pages/Homepage';
import LoginForm from './Pages/Login';
import StorePage from './Pages/Store';
import { useState } from 'react';


function App() {
  const [userID, setUserID] = useState("");
  return (
    <div className="App">
      <Navbar/>
      <StorePage userID={userID}/>
      <LoginForm callback={setUserID}/>
      <Footer/>
    </div>
  );
}

export default App;
