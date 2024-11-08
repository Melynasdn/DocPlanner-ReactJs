import React from 'react'
import "./StatSection.css"
import StatCard1 from './StatCard1'
import logo from "./logo-for-stat.png"
const StatSection = () => {
  return (
    <div className='stats'>
      <img className="GrandLogo" src={logo} alt=""/>

<div className="stats-header">
            <h1>
                The world's biggest
                <br/>
                healthcare platform
            </h1>
            <p>
                We work from 11 offices all over the world, bringing Docplanner Group to life in 13 countries.
            </p>
        </div>


        <div className='stats-items'>
              <StatCard1 titre={"Leader in 13 countries"}
                description={"Poland, Brazil, Mexico, Spain, Italy, Germany, Turkey, Colombia, Czech Republic, Portugal, Argentina, Peru and Chil"}
                image="https://www.docplanner.com/img/flag.png"/>
              <StatCard1 titre={"22,000,000 appointment"}
              description={"booked last month"}
              image="https://www.docplanner.com/img/visits.png"/>
              <StatCard1 titre={"90,000,000 patients"}
               description={"visit our websites each month"}
               image="https://www.docplanner.com/img/patients.png"/>
              <StatCard1 titre={"260,000 active doctors"}
               description={"trust our solutions"}
               image="https://www.docplanner.com/img/doctors.png"/>
        </div>
    </div>
  )
}

export default StatSection