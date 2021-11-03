import React from 'react'
import NetflixCopy from './NetflixCopy'
import StudyTimerRender from './study-timer/StudyTimerRender'
import Crud from './Crud'
import Footer from 'D:/ProjetosPessoais/Apresentacao/apresentacao/src/components/Footer.js'
import SalesWebMvc from './SalesWebMvc'

function Projects() {
  return (
    <>
      <NetflixCopy />
      {/* <StudyTimer /> */}
      <StudyTimerRender />
      <Crud />
      <SalesWebMvc />
      <Footer />
    </>
  )
}

export default Projects
