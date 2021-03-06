import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

const League = ({id,img,name}) => {
 const{handleClick} = useGlobalContext()

 return (
  <div className='league'>
   <div className="img-container">
    <img src={img} alt={name}/>
   </div>
   <div className="content">
    <h4>{name}</h4>
    <p>Sports Type : Football</p>
    <Link to={`/${id}`}><button className='btn'>Explore <FontAwesomeIcon icon={faArrowAltCircleRight} /></button></Link>
   </div>
  </div>
 )
}

export default League
