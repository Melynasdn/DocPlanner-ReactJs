import React from 'react'
import "./Main.css"
import Descriptions from './MainSections/Descriptions/Descriptions'
import CardsContainer from './MainSections/CardsContainer/CardsContainer'
import BrandsSection from './MainSections/BrandsSection/BrandsSection'
import StatSection from './MainSections/StatsSection/StatSection'
import Change from './MainSections/ChangeSection/Change'
import VilleSection from './MainSections/VilleSection/VilleSection'
import Join from './JoinSection/Join'
import Footer from '../Footer/Footer'
const Main = () => {
  return (
    <div className='Main'>
      <Descriptions/>
      <CardsContainer/>
      <BrandsSection/>
      <StatSection/>
      <Change/>
      <VilleSection/>
      <Join/>
    </div>
  )
}

export default Main