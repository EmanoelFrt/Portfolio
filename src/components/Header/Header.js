import React from 'react';
import './Header.css';
import LogoSite from '../../assets/img/LogoSite.png';

const Header = ({ acao }) => {
  const scrollToElement = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offset = window.scrollY;
      const totalOffset = elementPosition - 100 + offset;

      window.scrollTo({
        top: totalOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className={acao ? 'ativaCor' : ''}>
      <div className="logo-header">
        <img src={LogoSite} alt="Logo do Site" />
      </div>

      <div className="menu">
        <ul>
          <li><a href="#inicio" onClick={() => scrollToElement('Banner')}>Início</a></li>
          <li><a href="#sobre" onClick={() => scrollToElement('SobreMim')}>Sobre</a></li>
          <li><a href="#projetos" onClick={() => scrollToElement('ListaProjetos')}>Projetos</a></li>
          <li><a href="#contato" onClick={() => scrollToElement('Contato')}>Contato</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;