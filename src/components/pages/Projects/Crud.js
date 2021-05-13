import React from 'react';
import './NetflixCopy.css';
import { Link } from 'react-router-dom';
import gitPic from './images/Octocat.png';
import backgroundImage from './images/black-blue-tech.png';

function Crud() {
    return (
        <div className="project-container"
        style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${backgroundImage})`}}
            >
                <p>
                    Este projeto foi criado para aprender mais sobre JavaScript e React.
                    O projeto é simples e possui apenas uma página onde é possível cadastrar
                    usuários, altera-los e excluí-los.
                    Os dados são salvos em um arquivo JSON e são vistos logo abaixo dos campos
                    de input.<br></br><br></br>
                    <font color="Yellow"> React</font>,
                    <font color="Yellow"> CSS</font>,
                    <font color="Yellow"> JavaScript</font>,
                    <br></br>
                    Aqui está o link para o repositório deste projeto: <Link
                        to='/'
                        style={{ textDecoration: 'none' }}
                        target='_blank'>
                        {" https://github.com/LucassMota/CRUD"}
                    </Link>
                </p>
                <div className="pic-container">
                    <img src={gitPic} alt="github" className="git_pic"></img>
                </div>
            </div>
    
    )
}

export default Crud;