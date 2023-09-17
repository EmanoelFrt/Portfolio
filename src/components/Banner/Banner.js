import React from 'react';
import './Banner.css';
import FotoBanner from '../../assets/img/FotoBanner_novo.jpg'; // Importe a imagem corretamente

function Banner() {
  return (
    <div className="banner">
      <img className="banner-image"
        src={FotoBanner} // Substitua pelo caminho para a sua foto
        alt="Emanoel Fortuna"
      />
      <div className="banner-text">
        <h1>Emanoel Lucas Fortuna</h1>
        <div className="typing-text">
          <p>Desenvolvedor Delphi | C# | .NET | SQL | AWS</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;