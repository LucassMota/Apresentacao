import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import cardImage from './images/Netflix.JPG'
import cardImage2 from './images/Crud.JPG'
import cardImage3 from './images/home-study-timer.JPG'
import cardImage4 from './images/sales-web-mvc.JPG'
import backgroundImage from './images/coding-1.jpg'

function Cards() {
  return (
    <div
      className='cards'
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <h1>Aqui estão alguns dos meus projetos pessoais!</h1>
      <h3>
        Todos foram desenvolvidos com o objetivo de aprender sobre as linguagens
        e tecnologias que usei.<br></br>
        Pretendo adicionar aqui outros projetos a medida em que forem
        finalizados!<br></br>
      </h3>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={cardImage}
              text='Cópia da main page da Netflix totalmente responsiva feita em React'
              label='Front-end'
              // path='/Projects'
              path='/NetflixCopy'
            />
            <CardItem
              src={cardImage2}
              text='Crud com front-end responsivo desenvolvido em React e backend JavaScript'
              label='Front-end / Back-end'
              path='/Crud'
            />
            <CardItem
              src={cardImage3}
              text='Cronometro de estudos e pausa com tempo final acumulado para produtividade nos estudos. Feito em React e JavaScript'
              label='Front-end / Back-end'
              path='/StudyTimerRender'
            />
            <CardItem
              src={cardImage4}
              text='Sistema de cadastro de vendas e vendedores feito em C#, ASP.NET e .NET Core com estrutura MVC'
              label='Backend'
              path='/SalesWebMvc'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
