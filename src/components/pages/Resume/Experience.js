import React from 'react'
import './Experience.css'
import BackgroundImage from './images/neon-office-building.jpg'
import { useEffect, useRef } from 'react'

function Experience() {
  const topContainer = useRef()

  useEffect(() => {
    topContainer.current.scrollIntoView({ block: 'end', behavior: 'smooth' })
  }, [])

  return (
    <main
      className='about_hobbies'
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${BackgroundImage})`,
      }}
    >
      <div ref={topContainer} />
      <h1 className='title'>Onde trabalhei:</h1>
      <div className='job_description-container'>
        <h1>
          Entre fevereiro de 2018 e março de 2021 trabalhei na empresa
          <b>
            <font color='blue'> Junco Indústria E Comércio </font>
          </b>
          como assistente de sistemas.<br></br>
          Comecei prestando suporte técnico ao sistema da Landix de força de
          vendas para representantes externos da empresa e também aos sistemas
          ERP da Sankhya para os colaboradores internos. Também era minha tarefa
          criar relatórios em dashboards analíticos em{' '}
          <b>
            <font color=''>SQL</font>
          </b>{' '}
          para todas as áreas da empresa como as áreas financeira, fiscal,
          logística, transporte, produção, comercial, compras, controladoria
          etc..<br></br>
          Além disso também participava do desenvolvimento interno dos setores
          da empresa, ajudando a melhorar, criar e automatizar processos.
          <br></br>
          Para desenvolver as atividades citadas acima, eu trabalhava com banco
          de dados{' '}
          <b>
            <font color=''>Oracle</font>
          </b>
          , montando queries e views em{' '}
          <b>
            <font color=''>SQL</font>
          </b>
          , programando triggers, jobs, procedures e functions em{' '}
          <b>
            <font color=''>PL/SQL</font>
          </b>
          .
        </h1>
      </div>
    </main>
  )
}

export default Experience
