import React from 'react'
import './Herosection.css'
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES =['btn--primary','btn--outline'];
const SIZES = ['btn--medium','btn--large']

export default function Button(
    {children,type,buttonstyle,buttonsize,onClick})  {

const checkbuttonstyle = STYLES.includes(buttonstyle) ? buttonstyle : STYLES[0]
const checkbuttonsize = SIZES.includes(buttonsize) ? buttonsize : SIZES[0]

   
 
  return (
    <div>
      <Link to='/sign-up' className='btn-mobile'>
      <button className={`btn ${checkbuttonsize} ${checkbuttonstyle}`} onClick={onClick} type={type}>{children}</button>
      </Link>
    </div>
  )
}
