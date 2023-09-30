import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendEmail = () => {
    // Substitua este trecho pelo código real para enviar o e-mail.
    // Pode ser usado um serviço de envio de e-mails ou uma API de back-end.
    const emailContent = {
      to: email,
      subject: subject,
      message: message,
    };

    alert(`E-mail enviado com sucesso: ${JSON.stringify(emailContent)}`);
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <footer className="footer">
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
          <input
            type="email"
            placeholder="Seu E-mail"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="text"
            placeholder="Assunto"
            value={subject}
            onChange={handleSubjectChange}
          />
          <textarea
            placeholder="Escreva sua mensagem..."
            value={message}
            onChange={handleMessageChange}
          />
          <button onClick={handleSendEmail}>Enviar Email</button>
        </div>
      </div>
      <div>        
        <h1 className="contact-footer">© Copyright 2023 Emanoel Lucas Fortuna. Todos os direitos reservados.</h1>
      </div>
    </footer>
  );
};

export default Footer;