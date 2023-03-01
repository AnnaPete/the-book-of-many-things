import './Header.css'
import title from '../Images/title.png'
import logo from '../Images/dd-logo.webp'
// import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
      <div className='logo-container'>
        <img className='logo' src={logo} alt='dungeons and dragons logo' />
        <img className='dnd-title' src={title} alt='dungeons and dragons'/>
      </div>
      <div className='title-container'>
        <h1 className='title'>The Book of Many Things</h1>
        <nav>
          <button className='basic-rules-button'>Basic Rules</button>
          <button className='races-button'>Races</button>
          <button className='classes-button'>Classes</button>
          <button className='backgrounds-button'>Backgrounds</button>
          <button className='ability-scores-button'>Ability Scores</button>
          <button className='skills-button'>Skills</button>
          <button className='proficiencies-button'>Proficiencies</button>
        </nav>
      </div>
    </header>
  )
}

export default Header