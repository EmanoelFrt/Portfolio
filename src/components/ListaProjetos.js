import React from 'react';
import Projeto from './Projeto';
import './ListaProjetos.css'; // Importe os estilos

const ListaProjetos = ({ projetos }) => {
  const handleProjetoClick = (index) => {
    // Implemente a lógica que deseja executar ao clicar em um retângulo.
    console.log(`Clicou no retângulo ${index}`);
  };

  return (
    <div className="projeto-list">
      {projetos.map((projeto, index) => (
        <Projeto
          key={index}
          imageSrc={projeto.imageSrc}
          onClick={() => handleProjetoClick(index)}
        />
      ))}
    </div>
  );
};

export default ListaProjetos;