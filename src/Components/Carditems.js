import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'
 function Carditems({src,text,path,label}) {
  return (
    <div>
      <li className='cards__item'>
        <Link className='cards__item__link' to={path}>
        <figure className='cards__item__pic-wrap' data-category={label}>
            <img className='cards__item__img' src={src} alt="Travel img" />
        </figure>
        <div className='cards__item__info'>
            <h5 className='cards__item__text'>{text}</h5>
        </div>
        </Link>
      </li>
    </div>
  )
}
export default Carditems;