import './Header.css'
import React from 'react'
import title from '../Images/title.png'
import { NavLink, Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Header = ( { data } ) => {
  const renderLinks = () => {
    if (!data) {
      return null
    }

    return Object.keys(data).map((key) => (
      <NavLink to={`/${key}`} key={key}>{key}</NavLink>
    ))
  }

  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>
          <img className='dnd-title' src={title} alt='dungeons and dragons' />
        </Link>
      </div>
      <div className='title-container'>
        <span className='title'>The Book of Many Things</span>
        <nav>
          {renderLinks()}
        </nav>
      </div>
    </header>
  )
}

export default Header

Header.propTypes = {
  props: PropTypes.shape({
    data: PropTypes.shape({
      key: PropTypes.string.isRequired
    })
  })
}