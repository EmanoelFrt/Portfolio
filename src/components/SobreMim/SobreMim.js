import React from 'react';
import './SobreMim.css';
import Logo_csharp from '../../assets/img/logo-csharp.png';
import Logo_dotnet from '../../assets/img/logo-dotnet.png';
import Logo_delphi from '../../assets/img/logo-delphi.png';
import Logo_sql from '../../assets/img/logo-sql.png';
import Logo_git from '../../assets/img/logo-git.png';
import Logo_aws from '../../assets/img/logo-aws.png';
import Logo_python from '../../assets/img/logo-python.png';
import Logo_javascript from '../../assets/img/logo-javascript.png';
import Logo_react from '../../assets/img/logo-react.png';
import Logo_nodejs from '../../assets/img/logo-nodejs.png';

const SobreMim = () => {
  const handleDownload = ( ) => {
    fetch('https://s3.amazonaws.com/emanoelfortuna.com.br/assets/Curriculo_Emanoel.pdf', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/pdf',
      },
    })
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));

        const link = document.createElement('a');
        link.href = url;
        link.download = 'Curriculo_Emanoel.pdf';

        document.body.appendChild(link);

        link.click();

        link.parentNode.removeChild(link);
      });
  };

  return (
    <div className="sobre-mim" id="SobreMim">      
      <div className="logo-container-left">
        <div className="logo-sobre-mim">
          <img src={Logo_csharp} alt='CSharp'/>
        </div>
        <div className="logo-sobre-mim">
          <img src={Logo_dotnet} alt='DotNet'/>
        </div>
        <div className="logo-sobre-mim">          
          <img src={Logo_delphi} alt='Delphi'/>
        </div>
        <div className="logo-sobre-mim">
          <img src={Logo_sql} alt='SQL'/>
        </div>
        <div className="logo-sobre-mim">
          <img src={Logo_git} alt='Git'/>
        </div>
      </div>          
      <div className="text-container">
        <h1>Sobre mim</h1>
        <p>
          Sou desenvolvedor Delphi, .Net e AWS há 4 anos. Como freelancer,
          participei de projetos em .Net, Python e React. Sempre foco no
          desempenho de minhas aplicações e na interface amigável para o
          usuário.
        </p>
        <button onClick={handleDownload}>Baixar Currículo</button>
      </div>
      <div className="logo-container-right">
        <div className="logo-sobre-mim">
          <img src={Logo_aws} alt='AWS'/>
        </div>
        <div className="logo-sobre-mim">
          <img src={Logo_python} alt='Python'/>
        </div>
        <div className="logo-sobre-mim">
          <img src={Logo_javascript} alt='JavaScript'/>
        </div>
        <div className="logo-sobre-mim">
          <img src={Logo_react} alt='React'/>
        </div>
        <div className="logo-sobre-mim">
          <img src={Logo_nodejs} alt='NodeJS'/>
        </div>
      </div>  
    </div>
  );
};

export default SobreMim;