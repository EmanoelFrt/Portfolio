import React from 'react';
import './Modal.css'; // Importe os estilos do modal

const Modal = ({ projeto, onClose }) => {    
    const image = require(`../assets/img/${projeto.imageGif}`);
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Detalhes do Projeto</h2>
        <button className="modal-close-button" onClick={onClose}>
          Fechar
        </button>
        <div className="modal-flex-container">
          {/* Parte Esquerda (GIF) */}
          <div className="modal-left">
            <img
              src={image}
              alt="GIF do Projeto"
              className="modal-gif"
            />
          </div>
          {/* Parte Direita (Outras Informações) */}
          <div className="modal-right">
            <div>
              <h3>Nome do Projeto:</h3>
              <p>{projeto.nome}</p>
            </div>
            <div>
              <h3>Descrição do Projeto:</h3>
              <p>{projeto.descricao}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;