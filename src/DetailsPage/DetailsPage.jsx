import React from 'react'
import raid from '../Images/dungeon-raid.png'
import sword from '../Images/sword-coast.jpeg'
import PropTypes from 'prop-types'
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
        <div className='images'>
          <img src={raid} alt='adventurers fighting undead'/>
          <img src={sword} alt='drow versus balrog'/>
        </div>
        <div className='details-text'>
          <h1>More Info</h1>
          {displayDetails()}
        </div>
        <section className='buttons'>
          <button>Save To Your Info</button>
        </section>
      </div>
    </div>
  )
}

export default DetailsPage

DetailsPage.propTypes = {
  props: PropTypes.shape({
    details: PropTypes.shape({
      item: PropTypes.string.isRequired,
      i: PropTypes.string.isRequired
    })
  })
}