import React from 'react'
import "./BrandsSection.css"
import Logo from './Logo'
const BrandsSection = () => {
  return (
    <div className='BrandsSection'>

        <h2>
			We are a global <br/> company <br/>
		with local culture</h2>

        <ul className='brands__logos'>
          <Logo/>
          <Logo/>
          <Logo/>
          <Logo/>
          <Logo/>
          <Logo/>
          <Logo/>
          <Logo/>
          <Logo/>
          <Logo/>
       
        </ul>
		

    </div>
  )
}

export default BrandsSection