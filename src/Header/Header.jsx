import './Header.css'
import React from 'react'
import title from '../Images/title.png'
import { NavLink, Link } from 'react-router-dom'

const Header = ( { data } ) => {
  const renderLinks = () => {
    if (!data) {
      return null
    }

    return Object.keys(data).map((key) => (
      <NavLink to={`/${key}`} key={key} >{key}</NavLink>
    ))
  }

  return (
    <header className='header'>
      <Link to='/'>
        <img className='dnd-title' src={title} alt='dungeons and dragons' />
      </Link>
      <div className='title-container'>
        <h1 className='title'>The Book of Many Things</h1>
        <nav>
          {renderLinks()}
        </nav>
      </div>
    </header>
  )
}

export default Header