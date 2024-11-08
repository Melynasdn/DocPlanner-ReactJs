 import React from 'react'
import "./CardsContainer.css"
import Card from './Card'

const CardsContainer = () => {
  return (
    <div className='CardsContainerStyle'>
        <Card className='Patients' image={"https://www.docplanner.com/icons/icon-patients.svg"}
                title={"For Patients"}
                description={"Find a doctor, book a visit and solve any health-related doubt"}
                 bcS="rgb(0, 204, 177)"
                />
        <Card image={"https://www.docplanner.com/icons/icon-doctors.svg"}
                title={"For Doctors"}
                description={"Save time managing visits and cut no-shows by half"}
                 bcS="rgb(61, 131, 223)"
        />
        <Card image={"https://www.docplanner.com/icons/icon-clinics.svg"}
                title={"For Clinics"}
                description={"Deliver an exceptional patient experience in your clinic"}
                 bcS="rgb(27, 39, 52)"
        />
    </div>
  )
}

export default CardsContainer 