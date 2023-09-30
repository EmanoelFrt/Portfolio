import React from 'react';
import './Header.css'
import FotoBanner from '../../assets/img/FotoBanner.jpg';

const Header = ({acao}) => {
  return (
    <header className={ acao ? 'ativaCor' : ''}>
      <div className="logo-header">
        <img src={FotoBanner}/>
      </div>

      <div className='menu'>
        <ul>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;