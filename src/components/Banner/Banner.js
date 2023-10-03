import React from 'react';
import './Banner.css';
import FotoBanner from '../../assets/img/FotoBanner.jpg';

function Banner() {
  return (
    <div className="banner" id="Banner">
      <img className="banner-image"
        src={FotoBanner}
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