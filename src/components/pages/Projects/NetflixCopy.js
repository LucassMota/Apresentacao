import React from 'react'
import './NetflixCopy.css'
// import { Link } from 'react-router-dom';
import gitPic from './images/Octocat.png'
import backgroundImage from './images/black-blue-tech.png'

function NetflixCopy() {
  return (
    <div
      className='project-container'
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <p>
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
        {/* Aqui está o link para o repositório deste projeto: <Link
                        to='/'
                        style={{ textDecoration: 'none' }}
                        target='_blank'>
                        {" https://github.com/LucassMota/NetflixClone"}
                    </Link> */}
        Aqui está o link para o repositório deste projeto:{' '}
        <a
          href='https://github.com/LucassMota/NetflixClone'
          style={{ textDecoration: 'none' }}
          target='_blank'
          rel='noreferrer'
        >
          {' https://github.com/LucassMota/NetflixClone'}
        </a>
      </p>
      <div className='pic-container'>
        <img src={gitPic} alt='github' className='git_pic'></img>
      </div>
    </div>
  )
}

export default NetflixCopy
