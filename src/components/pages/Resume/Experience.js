import React from 'react';
import './Experience.css'
import BackgroundImage from './images/background_profile3.jpg';
import jobIllustration from './images/office2.png';
import nerd from './images/tag.png';
import SoftSkills from './images/brain.png';

function Experience() {
    return (
        <main className="about_hobbies"
        style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${BackgroundImage})`}}>
                    <h1>Onde trabalhei:</h1>
                    <div className="job_description-container">
                        <p>Entre fevereiro de 2018 e março de 2021 trabalhei na empresa
                        <b><font color="blue"> Junco Indústria E Comércio </font></b>
                        como assistente de sistemas.<br></br>
                        Comecei prestando suporte técnico ao sistema da Landix
                        de força de vendas para representantes externos da empresa e
                        também aos sistemas ERP da Sankhya para os colaboradores internos.
                        Também era minha tarefa criar relatórios em dashboards analíticos
                        em <b><font color="">SQL</font></b> para todas as áreas da empresa
                        como as áreas financeira, fiscal, logística, transporte, produção,
                        comercial, compras, controladoria etc..<br></br>
                        Além disso também participava do desenvolvimento interno dos setores
                        da empresa, ajudando a melhorar, criar e automatizar processos.<br></br>
                        Para desenvolver as atividades citadas acima, eu trabalhava com 
                        banco de dados <b><font color="">Oracle</font></b>, montando queries
                        e views em <b><font color="">SQL</font></b>, programando triggers,
                        jobs, procedures e functions em <b><font color="">PL/SQL</font></b>.
                        </p>
                        <img className="job-illustration" src={jobIllustration} alt="job"></img>
                    </div>
                    <p className="nerd_knowledge">Conhecimentos e soft skills:</p>
                    <div className="nerd_description-container">
                        <img className="nerd_illustration" src={nerd} alt="nerd"></img>
                        <ul>
                            <li className="nerd_list_details">JavaScript</li>
                            <li className="nerd_list_details">Node</li>
                            <li className="nerd_list_details">React</li>
                            <li className="nerd_list_details">HTML</li>
                            <li className="nerd_list_details">CSS</li>
                            <li className="nerd_list_details">MySQL SQL</li>
                            <li className="nerd_list_details">ORACLE SQL e PL/SQL</li>
                            <li className="nerd_list_details">Inglês fluente</li>
                        </ul>
                        <ul>
                            <li className="soft_skills_detail">Vontade e facilidade em aprender</li>
                            <li className="soft_skills_detail">Colaboração</li>
                            <li className="soft_skills_detail">Boa comunicação</li>
                            <li className="soft_skills_detail">Trabalho em equipe</li>
                            <li className="soft_skills_detail">Equilíbrio emocional</li>
                            <li className="soft_skills_detail">Adaptação</li>
                            <li className="soft_skills_detail">Organização</li>
                            <li className="soft_skills_detail">Criatividade</li>
                        </ul>
                        <img className="softSkils_illustration" src={SoftSkills} alt="soft"></img>
                    </div>
        </main>
    ) 
};

export default Experience;