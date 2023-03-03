import React from 'react'
import './Overview.css'

const Overview = ( { data, title } ) => {

  const displayData = () => {
    return data.map((item, i) => {
      return (
        <li key={i}>{ item }</li>
      )
    })
  }

  return (
    <div className='overview-container'>
      <div className='overview-body'>
        <img src='' alt='' />
        <div className='overview-description'>
          <section className='overview-text'>
            <h2>{title}</h2>
            <ol>{displayData()}</ol>
          </section>
          <section className='buttons'>
            <button>More Info</button>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Overview