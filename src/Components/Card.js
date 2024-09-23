import React from 'react'
import Carditems from './Carditems'
import './Card.css'
export default function Card() {
  return (
    <div className='cards'>
        <h1>Check out these Epic Destinations!</h1>
        <div className="cards__container">
           <div className="cards__wrapper">
            <ul className="cards__items">
                <Carditems
                src='images/img-9.jpg' 
                text='Explore The Hidden Waterfall Deep inside Amazon Jungle'
                label='Adventure'
                path='/services'
                />
                <Carditems
                src='images/img-2.jpg' 
                text='Travel through the Islands of Bali in a Private Cruise'
                label='Luxury'
                path='/services'
                />
            </ul>
            <ul className="cards__items">
                <Carditems
                src='images/img-3.jpg' 
                text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                label='Mystery'
                path='/services'
                />
                <Carditems
                src='images/img-4.jpg' 
                text='Experience Football on Top of the Himilayan Mountains'
                label='Adventure'
                path='/products'
                />
                <Carditems
                src='images/img-8.jpg' 
                text='Ride through the Sahara Desert on a guided camel tour'
                label='Adrenaline'
                path='/sign-up'
                />
            </ul>
           </div>
        </div>
      
    </div>
  )
}
