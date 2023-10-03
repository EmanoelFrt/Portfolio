import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Footer.css';

const Footer = () => {

  const [state, handleSubmit] = useForm("mgejpzay");
  if (state.succeeded) {
    alert(`Email enviado com sucesso.`);
  }

  return (
    <footer className="footer" id="Contato">
      <div>        
        <h1 className="contact-title">Contato</h1>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Email</h2>
          <p>emanoel.fortuna@hotmail.com</p>
          <h2>Telefone</h2>
          <p>(54) 99940-3196</p>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <input
              id="email"
              type="email" 
              name="email"
              placeholder='Seu E-mail'
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
            <input
              id="subject"
              type="subject"
              name="subject"
              placeholder='Assunto'
            />
            <ValidationError 
              prefix="Subject" 
              field="subject"
              errors={state.errors}
            />
            <textarea
              id="message"
              name="message"
              placeholder='Escreva sua mensagem...'
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
              Enviar Email
            </button>
          </form>
        </div>
      </div>
      <div>        
        <h1 className="contact-footer">© Copyright 2023 Emanoel Lucas Fortuna. Todos os direitos reservados.</h1>
      </div>
    </footer>
  );
};

export default Footer;