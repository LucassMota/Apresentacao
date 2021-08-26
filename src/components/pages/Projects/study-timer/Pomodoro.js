import React from 'react'
import './Pomodoro.css'
import backgroundImage from '../images/pomodoro-wallpaper-2.jpg'

function Pomodoro() {
  return (
    <div
      className='project-container-pomodoro'
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <p>
        Também acrescentei um cronômetro para quem quiser usar o método
        Pomodoro. Este método é muito útil para quem deseja estudar por longos
        períodos. Funciona da seguinte forma: Um tempo de 25 minutos é marcado e
        quando termina, uma pausa de 5 minutos começa. Esse ciclo se repete 3
        vezes e na quarta, uma pausa de 20 minutos começa.
        <br></br>
        Neste projeto procurei criar os temporizadores para serem executados da
        forma mais precisa possível. Tendo em mente que navegadores como Google
        Chrome dão pouca prioridade para tarefas realizadas em abas que não
        estão focadas e isso interfere na acuracidade de temporizadores
        JavaScript, utilizei ferramentas e técnicas para contornar esse
        problema, como Web Workers e date objects.
        <br></br>
        <br></br>
        Tecnologias usadas:
        <font color='Yellow'> JavaScript</font>,<font color='Red'> React</font>,
        <font color='Blue'> CSS</font>,{' '}
        <font color='Orange'> workerTimers</font>.<br></br>
        <br></br>
        <br></br>
        Vc pode encontrar este projeto neste link:
        <a
          href='https://modest-franklin-59d30b.netlify.app'
          style={{ textDecoration: 'none', color: 'rgb(88, 143, 247)' }}
          target='_blank'
          rel='noreferrer'
        >
          {' https://modest-franklin-59d30b.netlify.app'}
        </a>
        <br></br>
        <br></br>
        Aqui está o link para o repositório deste projeto:{' '}
        <a
          href='https://github.com/LucassMota/study-timer'
          style={{ textDecoration: 'none', color: 'rgb(88, 143, 247)' }}
          target='_blank'
          rel='noreferrer'
        >
          {' https://github.com/LucassMota/cronometro_de_estudos'}
        </a>
      </p>
      <div className='pic-container'>
        {/* <img src={gitPic} alt='github' className='git_pic'></img> */}
      </div>
    </div>
  )
}

export default Pomodoro
