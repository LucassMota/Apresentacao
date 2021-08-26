import React from 'react'
import './CronometroEstudos.css'
import backgroundImage from '../images/timer-wallpaper.jpg'

function StudyTimer() {
  return (
    <div
      className='project-container-timer'
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <p>
        Criei este projeto do zero a partir de uma necessidade minha. Estava
        estudando muitas horas por dia e queria saber quanto tempo eu estava
        reservando para essa atividade e também quantas horas líquidas estava
        estudando e quanto tempo tirava de pausa. Com esse projeto foi possível
        fazer isso além de saber quantos períodos de estudo e pausa eu fiz
        durante o dia. <br></br>
        <br></br>É um projeto simples e direto ao ponto. Na página principal
        contamos com dois cronômetros, um de tempo de estudo e outro de tempo de
        pausa.<br></br>
        com eles é possível ver quanto tempo de estudo e depois quanto tempo de
        pausa foram feitos. Ao final de cada tempo de estudo ou pausa feita, o
        resultado é mostrado logo abaixo podendo ser feito infinitamente e se
        mantém até todo o processo ser reiniciado, caso o usuário quiser.
      </p>
    </div>
  )
}

export default StudyTimer
