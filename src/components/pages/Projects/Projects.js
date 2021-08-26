import React from 'react'
import NetflixCopy from './NetflixCopy'
// import StudyTimer from './study-timer/CronometroEstudos.js'
import StudyTimerRender from './study-timer/StudyTimerRender'
import Crud from './Crud'
import Footer from 'D:/ProjetosPessoais/Apresentacao/apresentacao/src/components/Footer.js'

function Projects() {
  return (
    <>
      <NetflixCopy />
      {/* <StudyTimer /> */}
      <StudyTimerRender />
      <Crud />
      <Footer />
    </>
  )
}

export default Projects
