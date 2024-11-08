import React from 'react'
import "./VilleCard.css"

const VilleCard = () => {
  return (
    <div className='office'>
        <img scr="https://www.docplanner.com/images/warsaw.png" srcset="https://www.docplanner.com/images/warsaw.png 1x, https://www.docplanner.com/images/warsaw@2x.png 2x"/>
    <div className='office__desc'>
    Warsaw
    <a href="https://www.docplanner.com/career?&loc=brazil#jobs-offers">See oppenings</a>
    </div>
    </div>

  )
}

export default VilleCard