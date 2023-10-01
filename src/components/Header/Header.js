import React from 'react';
import './Header.css'
import LogoSite from '../../assets/img/LogoSite.png';

const Header = ({acao}) => {
  return (
    <header className={ acao ? 'ativaCor' : ''}>
      <div className="logo-header">
        <img src={LogoSite}/>
      </div>

      <div className='menu'>
        <ul>
          <li><a href="#">Início</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Projetos</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;