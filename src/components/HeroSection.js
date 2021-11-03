import React from 'react'
import '../App.css'
import './HeroSection.css'
// import Video from '../videos/video-3.mp4';
import BackgroundImage from '../images/background3.jpg'
import { useEffect, useRef } from 'react'

function HeroSection() {
  const topContainer = useRef()

  useEffect(() => {
    topContainer.current.scrollIntoView({ block: 'end', behavior: 'smooth' })
  }, [])
  return (
    <div
      className='hero-container'
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${BackgroundImage})`,
      }}
    >
      <div ref={topContainer} />
      {/* <video src={Video}  autoPlay loop muted /> */}
      <h1>Olá!</h1>
      <p>
        Neste site procuro mostrar um pouco sobre meu aprendizado e evolução
        como desenvolvedor e também um pouco sobre mim. <br></br>
        No momento, estou procurando minha primeira oportunidade como
        desenvolvedor e estou realmente ansioso para começar logo!<br></br>
        Aqui você vai encontrar alguns dos projetos que já finalizei e também
        alguns que ainda estão em andamento. Além disso, deixo meus contatos
        mais utilizados para caso você estiver precisando de um dev júnior! 😁
      </p>
      <div className='scroll_down'>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default HeroSection
