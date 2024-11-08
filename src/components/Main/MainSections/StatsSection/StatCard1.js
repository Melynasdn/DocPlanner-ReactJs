import React from 'react'
import "./StatCard1.css"

const StatCard1 = ({titre , description, image}) => {
  return (
    <div className='statCard'>
        <img src={image}/>
        <h3>{titre}</h3>
        <p>{description}</p>
    </div>
  )
}

export default StatCard1