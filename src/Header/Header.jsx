import './Header.css'
import React from 'react'
import { Route } from 'react-router-dom'
import Overview from '../Overview/Overview'
import title from '../Images/title.png'
// import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
      <div className='logo-container'>
        <img className='dnd-title' src={title} alt='dungeons and dragons'/>
      </div>
      <div className='title-container'>
        <h1 className='title'>The Book of Many Things</h1>
        <nav>
          <button className='rules'>Rules</button>
          <button className='races'>Races</button>
          <button className='classes'>Classes</button>
          <button className='alignments'>Alignments</button>
          <button className='backgrounds'>Backgrounds</button>
          <button className='ability-scores'>Ability Scores</button>
          <button className='skills'>Skills</button>
          <button className='proficiencies'>Proficiencies</button>
          {/* <Route path='/basic-rules' render={ ()=> <Overview className='rules' /> } />
          <Route path='/races' render={ ()=> <Overview className='races' /> } />
          <Route path='/classes' render={ ()=> <Overview className='classes' /> } />
          <Route path='/alignments' render={ ()=> <Overview className='alignments' /> } />
          <Route path='/backgrounds'  render={ ()=> <Overview className='backgrounds' /> } />
          <Route path='/ability-scores'  render={ ()=> <Overview className='ability-scores' /> } />
          <Route path='/skills' render={ ()=> <Overview className='skills' /> } />
          <Route path='/proficiencies'  render={ ()=> <Overview className='proficiencies' /> } /> */}
        </nav>
      </div>
    </header>
  )
}

export default Header