import React from 'react';
import './CronometroEstudos.css';
import { Link } from 'react-router-dom';
import gitPic from './images/Octocat.png';
import backgroundImage from './images/black-blue-tech.png';

function NetflixCopy() {
    return (
        <div className="project-container"
        style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${backgroundImage})`}}
            >
                <p>
                    Criei este projeto a partir de uma necessidade minha.
                    Estava estudando muitas horas por dia e queria saber quanto tempo
                    eu estava reservando para essa atividade e também quantas horas liquidas
                    estava estudando e quanto tempo tirava de pausa.
                    Com esse projeto foi possível fazer isso além disso saber quantos períodos
                    de estudo e pausa eu tenho durante o dia.
                    Pretendo ir melhorando ele com algumas outras ideias que tenho.
                    <font color="Yellow"> JavaScript</font>,
                    <font color="Yellow"> HTML</font>,
                    <font color="Yellow"> CSS</font>,
                    <br></br>
                    Aqui está o link para o repositório deste projeto: <Link
                        to='/'
                        style={{ textDecoration: 'none' }}
                        target='_blank'>
                        {" https://github.com/LucassMota/NetflixClone"}
                    </Link>
                </p>
                <div className="pic-container">
                    <img src={gitPic} alt="github" className="git_pic"></img>
                </div>
            </div>
    )
}

export default NetflixCopy;