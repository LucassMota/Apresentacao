import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import cardImage from './images/Netflix.JPG';
import cardImage2 from './images/Crud.JPG';
import backgroundImage from './images/coding-1.jpg';

function Cards () {
    return (
        <div className="cards"
        style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${backgroundImage})`
        }}>
            <h1>Aqui estão alguns dos meus projetos pessoais!</h1>
            <h3>Todos foram desenvolvidos com o objetivo de aprender sobre as linguagens e tecnologias que usei.<br>
                </br>
                Pretendo adicionar aqui outros projetos a medida em que forem finalizados!<br>
                </br>
            </h3>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className='cards__items'>
                        <CardItem
                        src={cardImage}
                        text='Cópia da main page da Netflix totalmente responsiva feita em React'
                        label='Front-end'
                        path='/Projects'
                        />
                        <CardItem
                        src={cardImage2}
                        text='Crud com front-end responsivo desenvolvido em React e backend JavaScript'
                        label='Front-end / Back-end'
                        path='/services'
                        />
                    </ul>
                    {/* <ul className='cards__items'>
                        <CardItem
                        src={cardImage3}
                        text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                        label='Mystery'
                        path='/services'
                        />
                        <CardItem
                        src={cardImage4}
                        text='Experience Football on Top of the Himilayan Mountains'
                        label='Adventure'
                        path='/products'
                        />
                        <CardItem
                        src={cardImage8}
                        text='Ride through the Sahara Desert on a guided camel tour'
                        label='Adrenaline'
                        path='/sign-up'
                        />
                    </ul> */}
                </div>
            </div>
        </div>
    );
}

export default Cards;