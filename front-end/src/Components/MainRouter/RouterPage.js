import React from 'react'

import TakeInputSubmit from '../InputPage/TakeInputSubmit'
import CarouselMain from '../Carousel/CarouselMain'
import Navbar from '../Navbar/Navbar'
import FeatureCard from '../Features/FeatureCard'
import OutPutImage from '../OutPut/OutPutImage'

export default function RouterPage() {
  return (
    <div>
        <Navbar/>
        <CarouselMain/>
        <TakeInputSubmit/>
        <FeatureCard/>
        {/* <OutPutImage path="result.jpg"/> */}
      
    </div>
  )
}
