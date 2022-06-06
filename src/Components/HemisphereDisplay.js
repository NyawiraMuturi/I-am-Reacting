import React from 'react'
import north from '/home/nyawira/Documents/Personal projects/ReactPractice/practice/src/img/north.jpeg'
import south from '/home/nyawira/Documents/Personal projects/ReactPractice/practice/src/img/south.jpeg'
import './HemisphereDisplay.css'

const hemisphereConfig = {
  Nothern: {
    text: "You Are in the Nothern Hemisphere",
    pic: north
  },
  Southern: {
    text: "You Are in the Southern Hemisphere",
    pic: south
  }
}

const HemisphereDisplay = ({latitude}) => {
  console.log(latitude)
  const hemisphere =latitude > 0 ? 'Nothern' : 'Southern';
  const {text, pic} = hemisphereConfig[hemisphere]

  return (
    <div>
      <img src={pic} alt="" className='picture'/>
      {text}
    </div>
  )
}

export default HemisphereDisplay




