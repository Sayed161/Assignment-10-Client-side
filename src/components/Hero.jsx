import React, { useRef, useState } from 'react'
import Featured from './Featured'
import Action from './Action'
import Upcoming from './Upcoming'


const Hero = () => {
 
  return (
    <div>
      <Featured/>
      <Action></Action>
      <Upcoming></Upcoming>
    </div>
  )
}

export default Hero
