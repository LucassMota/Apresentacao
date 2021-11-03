import React from 'react'
import './NetflixCopy.css'
import backgroundImage from './images/netflix-project.jpg'
import { useEffect, useRef } from 'react'

function NetflixCopy() {
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
        Este projeto foi criado para aprender mais sobre React e CSS.<br></br>A
        intenção é ter uma cópia bem realista da main page da Netflix. O projeto
        foi feito em março de 2021 e com atualizações de UI da Netflix, pode ser
        que a página venha a apresentar diferenças da original com o tempo.
        Porém pretendo trazer atualizações futuramente.<br></br>
        Também os dados da API utilizada não especificam se os filmes originais
        são mesmo da Netflix, apenas alguns sendo realmente dela. Neste caso, os
        filmes apresentados na sessão originais são meramente fictícios.
        <br></br>
        <br></br>
        Tecnologias usadas neste projeto:
        <font color='Yellow'> React</font>,<font color='Yellow'> CSS</font>,
        <font color='Yellow'> BootStrap</font>,
        <font color='Yellow'> JavaScript</font>,
        <font color='Yellow'> API themoviedb.org</font>.<br></br>
        Aqui está o link para o repositório deste projeto:{' '}
        <a
          href='https://github.com/LucassMota/NetflixClone'
          style={{ textDecoration: 'none', color: 'rgb(88, 143, 247)' }}
          target='_blank'
          rel='noreferrer'
        >
          {' https://github.com/LucassMota/NetflixClone'}
        </a>
        <br></br>E aqui está o link para o projeto rodando:
        <a
          href='https://netflix-homepage-project.netlify.app/'
          style={{ textDecoration: 'none' }}
          target='_blank'
          rel='noreferrer'
        >
          {' https://netflix-homepage-project.netlify.app/'}
        </a>
      </h1>
    </div>
  )
}

export default NetflixCopy
