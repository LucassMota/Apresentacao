import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

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
          <Link 
            to='/'
            style={{ textDecoration: 'none' }}
            target='_blank'>
          <i className='fab fa-whatsapp'/>
          {" (34) 9 9164-6607"}
          </Link>
          <Link 
            to='/https://www.linkedin.com/in/lucas-mota-57063115a'
            style={{ textDecoration: 'none' }}
            target='_blank'>
          <i className='fab fa-linkedin'/>
          </Link>
          <Link 
            to='/'
            style={{ textDecoration: 'none' }}
            target='_blank'>
          <i className='fas fa-envelope'/>
          {" lcsmota8@outlook.com"}
          </Link>
        </div>
    </div>
  );
}

export default Footer;
