import React from 'react'
import Button from './Button'
import './Herosection.css'
 function Herosection() {
  return (
    <div className='hero-container'>
       <video src='/Videos/video-2.mp4' autoPlay muted loop></video>
       <h1>ADVENTURE AWAITS</h1>
       <p>What are you waiting for?</p>
       <div className='hero-btns'>

        <Button className='btns' buttonstyle={'btn--outline'} buttonsize={'btn--large'}>GET STARTED</Button>

        <Button className='btns' buttonstyle={'btn--primary'} buttonsize={'btn--large'}>WATCH TRAILER <i className='far fa-play-circle'></i></Button>
       </div>
    </div>
  )
}
 export default Herosection;

