import React from 'react'
import './Homepage.css'
import image from '../Images/dungeons-and-dragons-lede.jpg'

const Homepage = () => {
  return (
    <div className='homepage-container'>
      <h2 className='greeting'>Welcome to the Book of Many Things - your own personal Dungeons & Dragons encyclopedia!</h2>
      <div className='homepage-body'>
        <section className='intro'>
          <h3>What exactly IS Dungeons & Dragons?</h3>
          <p>Dungeons & Dragons (D&D) is a fantasy tabletop role-playing game where players create their own characters and go on adventures guided by a storyteller, called the Dungeon Master (DM).</p>
          <p>The game involves rolling dice to determine the outcome of various actions and decisions made by the players. D&D allows for a great deal of creativity and imagination as players work together to solve puzzles, fight monsters, and explore fantastical worlds.</p>
          <p>It's a collaborative storytelling experience where anything can happen and the possibilities are endless.</p>
        </section>
        <img src={image} alt='adventurers fighting a dragon'/>
      </div>
    </div>
  )
}

export default Homepage