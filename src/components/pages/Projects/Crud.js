import React from 'react'
import './Crud.css'
import backgroundImage from './images/crud.jpg'
import { useEffect, useRef } from 'react'

function Crud() {
  const topContainer = useRef()

  useEffect(() => {
    topContainer.current.scrollIntoView({ block: 'end', behavior: 'smooth' })
  }, [])

  return (
    <div
      className='project-container'
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div ref={topContainer} />
      <h1>
        Este projeto foi criado para aprender mais sobre JavaScript e React. O
        projeto é simples e possui apenas uma página onde é possível cadastrar
        usuários, altera-los e excluí-los. Os dados são salvos em um arquivo
        JSON e são vistos logo abaixo dos campos de input.<br></br>
        <br></br>
        Tecnologias usadas neste projeto:
        <font color='Yellow'> React</font>,<font color='Yellow'> CSS</font>,
        <font color='Yellow'> JavaScript</font>,<br></br>
        Aqui está o link para o repositório deste projeto:{' '}
        <a
          href='https://github.com/LucassMota/CRUD'
          style={{ textDecoration: 'none', color: 'rgb(88, 143, 247)' }}
          target='_blank'
          rel='noreferrer'
        >
          {' https://github.com/LucassMota/CRUD'}
        </a>
      </h1>
    </div>
  )
}

export default Crud
