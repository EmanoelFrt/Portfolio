import React from 'react';
import './Projeto.css'; // Importe os estilos

const Projeto = ({ imageSrc, onClick }) => {
  const image = require(`../../assets/img/${imageSrc}`);

  return (
    <div className="projeto" onClick={onClick}>
      <img src={image} alt="Imagem" style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default Projeto;