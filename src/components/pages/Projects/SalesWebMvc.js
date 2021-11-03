import React from 'react'
import './SalesWebMvc.css'
import backgroundImage from './images/sales-web-mvc.jpg'
import { useEffect, useRef } from 'react'

function SalesWebMvc() {
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
        Este projeto foi criado para aprender mais sobre C#, .NET Core, ASP.NET,
        Entity Framework e também sobre o modelo MVC.
        <br></br>O projeto consiste em um simples sistema web que cadastra
        vendedores e faz ligação com seus departamentos (que também podem ser
        criados e editados). Além disso, possui uma tela que carrega um
        dashboard com as vendas feitas por esses vendedores (previamente
        registradas no banco de dados) com um filtro para busca por data
        mostrando as vendas de cada vendedor e outro filtro para busca agrupada
        por departamento.
        <br></br>
        <br></br>
        Tecnologias usadas neste projeto:
        <font color='Yellow'> C#</font>,
        <font color='Yellow'> ASP.NET Core</font>,
        <font color='Yellow'> .NET Core</font>,
        <font color='Yellow'> Entity Framework</font>,<br></br>
        Aqui está o link para o repositório deste projeto:{' '}
        <a
          href='https://github.com/LucassMota/SalesWebVisualizer-Mvc'
          style={{ textDecoration: 'none', color: 'rgb(88, 143, 247)' }}
          target='_blank'
          rel='noreferrer'
        >
          {' https://github.com/LucassMota/SalesWebVisualizer-Mvc'}
        </a>
      </h1>
    </div>
  )
}

export default SalesWebMvc
