import React from 'react'
import './About_hobbies.css'
import HobbiesPic from './images/music_books.jpg'
import HobbiesPic2 from './images/videogame.jpg'
import BackgroundImage from './images/background.jpg'
import CodingPic from './images/js_react.jpg'

function AboutTech() {
  return (
    <div
      className='about_hobbies'
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${BackgroundImage})`,
      }}
    >
      <div className='container'>
        <div className='mosaic'>
          <div className='mosaic__items'>
            <img
              src={HobbiesPic}
              alt='HobbiesPicture2'
              className='HobbiesPicture2'
            ></img>
          </div>
          <div className='mosaic__items'>
            <img
              src={HobbiesPic2}
              alt='HobbiesPicture'
              className='HobbiesPicture'
            ></img>
          </div>
        </div>
        <div className='about__description__hobbies'>
          <p>
            Dentre as coisas que gosto de fazer, as minhas favoritas são ouvir
            música (principalmente Metal e Rock) e ir a shows. Fora desse mundo
            barulhento, também adoro ler vários tipos de livros principalmente
            fantasia, ficção cíentifica, terror, hqs e mangás. E como todo bom
            geek, assistir séries e jogar videogames nas horas vagas.
          </p>
        </div>
      </div>
      <div className='container2'>
        <div className='about__description__hobbies'>
          <p>
            No final de 2020 não estava tendo aulas na faculdade e sem poder
            sair devido a pandemia, quis ocupar a cabeça com algo produtivo.
            Comecei então a me interessar por programação assistindo a aulas no
            YouTube sobre python. Adorei a linguagem e todo esse negócio de
            programar e por isso resolvi aprender mais sobre o mercado de
            programação e tudo o que a envolvia. Foi assim que conheci a
            programação para Web (JavaScript, NodeJs, React, HTML e CSS) e mais
            recentemente C# e .Net; então me apaixonei. <br></br>
            Entretanto, ainda no final do ano, devido a pandemia as demandas na
            empresa onde eu estava cresceram muito e por isso não consegui mais
            estudar. Foi um período díficil mas superado com sucesso!
            <br></br>
            Em março de 2021 comecei de fato a estudar programação e desde então
            tenho me esforçado para aprender tanto o back-end quanto o front-end
            e hoje considero programação como a coisa mais divertida e
            interessante que faço.
          </p>
        </div>
        <img src={CodingPic} className='CodingPic' alt='coding'></img>
      </div>
    </div>
  )
}

export default AboutTech
