import React from 'react';
import './Profile.css';
import ProfilePic from './images/me.jpg';
import BackgroundImage from './images/background_profile5.jpg'

function Profile() {
    return (
        <div className="about"
        style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${BackgroundImage})`}}>
            <ul>
                <div className="about_container">
                    <div className="profile_pic_wrapper">
                        <img src={ProfilePic} alt="Profile" className="profile__image"></img>
                    <div className="profile__name">Lucas Mota</div>
                    <div className="profile__title">Estudante de Desenvolvimento Web</div>
                    <div className="profile__details">23 anos</div>
                    </div>
                </div>
                <div className="about__description">
                    <h1>
                        Sempre curioso e interessado em aprender coisas dos mais diversos
                        assuntos, foi na programação que recentemente descobri uma nova paixão.
                        De forma autodidata, ando melhorando meus conhecimentos como desenvolvedor
                        e procurando minha primeira oportunidade como desenvolvedor profissional
                        para aprender muito mais.
                        </h1>
                </div>
            </ul>
        </div>
            
        
    ) 
        
};

export default Profile;