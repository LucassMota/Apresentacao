import React from 'react';
import './NetflixCopy.css';
import { Link } from 'react-router-dom';
import gitPic from './images/Octocat.png';
import backgroundImage from './images/background_profile2.jpg';
import project_pic from './images/Netflix.JPG';

function NetflixCopy() {
    return (
        <div className="project-container"
        style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${backgroundImage})`}}>
                {/* <img src={project_pic} alt="project" className="project_pic"></img> */}
                <p>
                    Este projeto foi criado para aprender mais sobre React e CSS.<br></br>
                    A intenção é ter uma cópia bem realista da main page da Netflix. 
                    O projeto foi feito em março de 2021 e com atualizações de UI da Netflix,
                    pode ser que a página venha a apresentar diferenças da original com o tempo.
                    Porém pretendo trazer atualizações futuramente.<br></br>
                    Também os dados da API utilizada não especificam se os filmes originais
                    são mesmo da Netflix, apenas alguns sendo realmente dela. Neste caso, os filmes
                    apresentados na sessão originais são meramente fictícios.<br></br><br></br>
                    <font color="Yellow"> React</font>,
                    <font color="Yellow"> CSS</font>,
                    <font color="Yellow"> BootStrap</font>,
                    <font color="Yellow"> JavaScript</font>,
                    <font color="Yellow"> API themoviedb.org</font>.
                    <br></br>
                    Aqui está o link para o repositório deste projeto: <Link
                        to='/'
                        style={{ textDecoration: 'none' }}
                        target='_blank'>
                        {/* <i className='fab fa-github'/> */}
                        {" https://github.com/LucassMota/NetflixClone"}
                    </Link>
                </p>
                
                <img src={gitPic} alt="github" className="git_pic"></img>
            </div>
    )
}

export default NetflixCopy;