import React from 'react';
import './Footer.css';
// import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-subscription'>
        <h1 className='footer-subscription-heading' >
          {"Bom, se você gostou do que viu aqui e está a procura de um júnior para sua empresa por favor considere entrar em contato comigo! "} 
          <i className='fas fa-handshake' />
        </h1>
      </div>
      <div className="div_footer-subscription-heading">
        <div>
          <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5534991646607"
            style={{ textDecoration: 'none' }}
            target='_blank'
            rel="noreferrer">
            <i className='fab fa-whatsapp'/>
            {" (34) 9 9164-6607"}
          </a>
        </div>

        <a href="https://www.linkedin.com/in/lucas-mota-57063115a"
          style={{ textDecoration: 'none' }}
          target='_blank'
          rel="noreferrer">
          <i className='fab fa-linkedin'/>
        </a>
        
        <div style={{color: '#fff', display: 'flex', flexDirection: 'row', alignItems: 'baseline'}}>
          <i className='fas fa-envelope'/>
          <p>lcsmota8@outlook.com</p>
        </div>
          {/* <Link 
            to='/'
            style={{ textDecoration: 'none' }}
            target='_blank'>
          <i className='fab fa-whatsapp'/>
          {" (34) 9 9164-6607"}
          </Link> */}
          {/* <Link 
            to='https://www.linkedin.com/in/lucas-mota-57063115a'
            style={{ textDecoration: 'none' }}
            target='_blank'>
          <i className='fab fa-linkedin'/>
          </Link> */}
          {/* <Link 
            to='/'
            style={{ textDecoration: 'none' }}
            target='_blank'>
          </Link> */}
        </div>
    </div>
  );
}

export default Footer;
