import React from 'react'
import { useHistory } from 'react-router-dom'
import './Overview.css'

const Overview = ( { data, title } ) => {
  const history = useHistory()
  const handleChange = () => {
    history.push(`/${title}/details`)
  }

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
        <div className='overview-description'>
          <section className='overview-text'>
            <h2>{title}</h2>
            <ul>{displayData()}</ul>
          </section>
          <section className='buttons'>
            <button onClick={ handleChange }>More Info</button>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Overview