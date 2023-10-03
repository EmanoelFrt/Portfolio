import React from 'react';
import './ModalProjeto.css';
import logoGithub from '../../assets/img/logo-github.png'

const Modal = ({ projeto, onClose }) => {    
    const image = require(`../../assets/img/${projeto.imageGif}`);

    const handleGithubModal = () => {
      if (projeto.linkGithub) 
      {
        window.open(`${projeto.linkGithub}`, '_blank');
      }
      else
      {
        console.log("Repositório privado.");
      }
    };

    const buttonGitHub = projeto.linkGithub
    ? "modal-github-button"
    : "modal-github-button-privado";

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{projeto.nome}</h2>
          <button className="modal-close-button" onClick={onClose}>
            Fechar
          </button>
        </div>
        <hr></hr>
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
              <h3>Descrição:</h3>
              <p>{projeto.descricao}</p>
              <h3>Funcionalidades:</h3>
              <p>{projeto.funcionalidades}</p>
              <h3>Tecnologias:</h3>
              <p>{projeto.tecnologias}</p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="modal-footer">
        <button className={buttonGitHub} onClick={handleGithubModal}>
          <img
            src={logoGithub}
          />
          {projeto.linkGithub ? <span>Repositório</span> : <span>Repositório Privado</span>}
        </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;