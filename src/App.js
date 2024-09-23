import Home from './Components/pages/Home'
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Services from './Components/pages/Services';
import Products from './Components/pages/Products';
import Signup from './Components/pages/Signup';
function App() {
  return (
   <>
   <Router>
    <Navbar/>
 <Routes>
 <Route path='/' exact Component={Home}/>
 <Route path='/services'  Component={Services}/>
 <Route path='/products' Component={Products}/>
 <Route path='/sign-up'  Component={Signup}/>
 </Routes>
   </Router>
   </>
  );
}

export default App;
