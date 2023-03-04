import React from 'react'
import raid from '../Images/dungeon-raid.png'
import './DetailsPage.css'

function DetailsPage({ details }) {

  const displayDetails = () => {
    return details.map((item, i) => {
      return (
        <p key={i}>{ item }</p>
      )
    })
  }

  return (
    <div className='details'>
      <div className='details-body'>
        <img src={raid} alt='adventurers fighting undead'/>
        <div className='details-text'>
          <h1>More Info</h1>
          {displayDetails()}
        </div>
      </div>
    </div>
  )
}

export default DetailsPage