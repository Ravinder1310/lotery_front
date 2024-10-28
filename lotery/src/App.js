import logo from './logo.svg';
import './App.css';
import Home from './lotery/home';
import Navbar from './lotery/navbar';
import Footer from './lotery/footer';
import {Routes,Route} from "react-router-dom"
import MyLoattery from './lotery/myLoattery';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/my-lottery' element={<MyLoattery/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
