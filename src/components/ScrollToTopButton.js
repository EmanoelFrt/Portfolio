import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Adiciona um event listener para verificar quando a página é rolada
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Verifica se o botão deve ser visível com base na posição da rolagem
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Função para rolar para o topo da página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <div className='scroll-to-top-arrow'>
        <i className="fa fa-chevron-up"></i>
      </div>
    </button>
  );
}

export default ScrollToTopButton;