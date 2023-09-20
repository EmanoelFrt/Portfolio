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
  return (
    <div className="sobre-mim">      
      <div className="logo-container-left">
        <div className="logo-sobre-mim">
          <img src={Logo_csharp}/>
        </div>
        <div className="logo-sobre-mim">
          <img src={Logo_dotnet}/>
        </div>
        <div className="logo-sobre-mim">          
          <img src={Logo_delphi}/>
        </div>
        <div className="logo-sobre-mim">
          <img src={Logo_sql}/>
        </div>
        <div className="logo-sobre-mim">
          <img src={Logo_git}/>
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
      </div>
      <div className="logo-container-right">
        <div className="logo-sobre-mim">
          <img src={Logo_aws}/>
        </div>
        <div className="logo-sobre-mim">
          <img src={Logo_python}/>
        </div>
        <div className="logo-sobre-mim">
          <img src={Logo_javascript}/>
        </div>
        <div className="logo-sobre-mim">
          <img src={Logo_react}/>
        </div>
        <div className="logo-sobre-mim">
          <img src={Logo_nodejs}/>
        </div>
      </div>  
    </div>
  );
};

export default SobreMim;