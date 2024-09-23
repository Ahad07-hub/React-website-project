import React, { useEffect } from 'react'
import  {useState} from 'react'
import {Link} from 'react-router-dom'
import Button from './Button';
import './Navbar.css';

function Navbar() {
  let [click ,setclick]=useState(false);
 let handleclick = ()=> setclick(!click)
 let [button,setbutton]=useState(true)
 let closemoblemenu =()=> setclick(false);


 let showbutton=()=>{
  if (window.innerWidth<=960) {
    setbutton(false);
  }else {
    setbutton(true)
  }
 };
 
 window.addEventListener('resize',showbutton)

 useEffect(()=>{
  showbutton();
 },[])



  return (
  <>
   <nav className="navbar">
    <div className="navbar-container">
  <Link to='/' className='navbar-logo'>TRVL<i className='fab fa-typo3'></i> </Link>
  <div className="menu-icon" onClick={handleclick}>
    <i className={click ? 'fa fa-times' : 'fa fa-bars'}></i>
  </div>
  <ul className={click ? 'nav-menu active': 'nav-menu'}>
  <li className='nav-item'> 
  <Link to='/' className='nav-links' onClick={closemoblemenu}>Home</Link>  
   </li>

  <li className='nav-item'> 
  <Link to='/services' className='nav-links' onClick={closemoblemenu}>Services</Link>  
   </li>

  <li className='nav-item'>
  <Link to='/products' className='nav-links' onClick={closemoblemenu}>Products</Link>  
   </li>
  <li className='nav-item'>
  <Link to='/sign-up' className='nav-links-mobile' onClick={closemoblemenu}>
  Sign up</Link> 
   </li>
  </ul>
  {button && <Button buttonstyle='btn--outline'>Sign Up</Button>}
    </div>
   </nav>
  </>
  )
}

export default Navbar
