import React, { useState } from 'react';
import Projeto from './Projeto.js';
import Modal from './ModalProjeto.js';
import './ListaProjetos.css';

const ListaProjetos = ({ projetos }) => {
  const [modalAberto, setModalAberto] = useState(false);
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);

  const handleProjetoClick = (index) => {
    setProjetoSelecionado(projetos[index]);
    setModalAberto(true);
  };

  const handleCloseModal = () => {
    setModalAberto(false);
  };

  return (
    <div id="ListaProjetos">
      <h1 className='projeto-list-titulo'>Projetos</h1>
      <div className="projeto-list">
        {projetos.map((projeto, index) => (
          <Projeto
            key={index}
            imageSrc={projeto.imageSrc}
            imageSrc2={projeto.imageSrc2}
            onClick={() => handleProjetoClick(index)}
          />
        ))}
        {modalAberto && (
          <Modal projeto={projetoSelecionado} onClose={handleCloseModal} />
        )}
      </div>
    </div>
  );
};

export default ListaProjetos;