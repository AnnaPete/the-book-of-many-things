import React from 'react'
import DetailsPage from '../DetailsPage/DetailsPage'
import './Overview.css'

const Overview = ( { data, title } ) => {

  const displayData = () => {
    return data.map((item, i) => {
      return (
        <li key={i}>{ item }</li>
      )
    })
  }

  const showDetails = () => {
    return (
      <DetailsPage />
    )
  }

  return (
    <div className='overview-container'>
      <div className='overview-body'>
        <div className='overview-description'>
          <section className='overview-text'>
            <h2>{title}</h2>
            <ul>{displayData()}</ul>
          </section>
          <section className='buttons'>
            <button onClick={() => showDetails()}>More Info</button>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Overview