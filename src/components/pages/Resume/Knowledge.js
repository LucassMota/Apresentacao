import React from 'react'
import BackgroundImage from './images/hard-skills.jpg'
import './Knowledge.css'

function Knowledge() {
  return (
    <main
      className='about_hobbies'
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${BackgroundImage})`,
      }}
    >
      <h1 className='nerd_knowledge'>Conhecimentos:</h1>
      <div className='nerd_description-container'>
        <ul>
          <li className='nerd_list_details'>JavaScript</li>
          <li className='nerd_list_details'>Node</li>
          <li className='nerd_list_details'>React</li>
          <li className='nerd_list_details'>HTML</li>
          <li className='nerd_list_details'>CSS</li>
          <li className='nerd_list_details'>MySQL SQL</li>
          <li className='nerd_list_details'>ORACLE SQL e PL/SQL</li>
          <li className='nerd_list_details'>Git</li>
          <li className='nerd_list_details'>Inglês fluente</li>
        </ul>
      </div>
    </main>
  )
}

export default Knowledge
