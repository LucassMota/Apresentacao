import React from 'react'
import BackgroundImage from './images/soft-skills.jpg'
import './Knowledge'

function SoftSkills() {
  return (
    <main
      className='about_hobbies'
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${BackgroundImage})`,
      }}
    >
      <h1 className='nerd_knowledge'>Soft Skills:</h1>
      <div className='nerd_description-container'>
        <ul>
          <li className='nerd_list_details'>
            Vontade e facilidade em aprender
          </li>
          <li className='nerd_list_details'>Colaboração</li>
          <li className='nerd_list_details'>Boa comunicação</li>
          <li className='nerd_list_details'>Trabalho em equipe</li>
          <li className='nerd_list_details'>Equilíbrio emocional</li>
          <li className='nerd_list_details'>Adaptação</li>
          <li className='nerd_list_details'>Organização</li>
          <li className='nerd_list_details'>Criatividade</li>
        </ul>
      </div>
    </main>
  )
}

export default SoftSkills
