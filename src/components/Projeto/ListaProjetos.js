import React, { useState } from 'react';
import Projeto from './Projeto.js';
import Modal from './ModalProjeto.js'; // Importe o componente Modal
import './ListaProjetos.css';

const ListaProjetos = ({ projetos }) => {
  const [modalAberto, setModalAberto] = useState(false); // Estado para controlar se o modal está aberto
  const [projetoSelecionado, setProjetoSelecionado] = useState(null); // Estado para armazenar o projeto selecionado

  const handleProjetoClick = (index) => {
    // Quando um projeto for clicado, atualize o estado do modal
    setProjetoSelecionado(projetos[index]);
    setModalAberto(true);
  };

  const handleCloseModal = () => {
    // Função para fechar o modal
    setModalAberto(false);
  };

  return (
    <div>
      <h1>Projetos</h1>
      <div className="projeto-list">
        {projetos.map((projeto, index) => (
          <Projeto
            key={index}
            imageSrc={projeto.imageSrc}
            imageSrc2={projeto.imageSrc2}
            onClick={() => handleProjetoClick(index)}
          />
        ))}

        {/* Renderize o modal com base no estado */}
        {modalAberto && (
          <Modal projeto={projetoSelecionado} onClose={handleCloseModal} />
        )}
      </div>
    </div>
  );
};

export default ListaProjetos;