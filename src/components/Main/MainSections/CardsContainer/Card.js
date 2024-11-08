import React from 'react'
import "./Card.css"


const Card = ({image, title, description,bcS}) => {

  const Bc = {
    backgroundColor: bcS
  }
  
  return (
    <div className='CardStyle' style={Bc}>
        <div className='TOP'>
        <img src={image} alt='icon'/>
        <h1>{title}</h1>
        <p>{description}</p>
        </div>
        <div className='BOTTOM'>
        <select id="Country">
                    <option value="volvo">Germany</option>
                    <option value="saab">France</option>
                    <option value="vw">Algeria</option>
                    <option value="audi" selected>Choose a country</option>
                  </select>
        </div>
    </div>
  )
}

export default Card 