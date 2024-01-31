import React, { useEffect, useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import ListaProjetos from './components/Projeto/ListaProjetos';
import SobreMim from './components/SobreMim/SobreMim';
import Footer from './components/Footer/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import './components/ScrollBar.css';

function App() {

  const [ativaCor, setAtivaCor] = useState(false);

  const projetos = [
    {
      imageSrc: 'Projeto-RemoteDesktopManager.jpg',
      imageGif: 'RemoteDesktopManager.gif',
      nome: 'Remote Desktop Manager',
      descricao: 'Aplicativo utilizado para conectar e gerenciar a Conexão de Área de Trabalho Remota do Windows.',
      funcionalidades:`• Incluir/Alterar/Excluir clientes e acessos.
                       • Conectar a uma área de trabalho remota via mtsc.exe.
                       • Visualização de acesso de cada usuário.`,
      tecnologias: 'Delphi, SQL e Firebird.',
      linkGithub: 'https://github.com/EmanoelFrt/RemoteDesktopManager' 
    },
    {
      imageSrc: 'Projeto-SyncSistemas.jpg',
      imageGif: 'SyncSistemas.gif',
      nome: 'Sync Sistemas',
      descricao: 'Sistema ERP/PDV financeiro totalmente desenvolvido em .NET e C#.',
      funcionalidades:`• Realizar Vendas.
                       • Gestão Financeira.
                       • Controle de Estoque.
                       • Emissão e Envio de NF-e e NFC-e.
                       • Impressão de Relatórios Gerencias.`,
      tecnologias: '.NET, C#, AWS, SQL, PostgreSQL.',
    },
    {
      imageSrc: 'Projeto-SmartSchool.jpg',
      imageGif: 'SmartSchool.gif',
      nome: 'Smart School',
      descricao: 'Sistema de presença automatizada por reconhecimento facial em um ambiente escolar. Desenvolvido como projeto de conclusão de curso.',
      funcionalidades:`• Cadastrar Alunos.
                       • Efetuar a Chamada automaticamente utilizando reconhecimento facial.
                       • Impressão de Relatórios Gerencias.`,
      tecnologias: '.NET, C#, SQL, PostgreSQL, I.A., Python.'
    },
    {
      imageSrc: 'Projeto-PyTrello.jpg',
      imageGif: 'PyTrello.gif',
      nome: 'PyTrello',
      descricao: 'Esta API é utilizada para interagir com cards de um determinado board do Trello.',
      funcionalidades:`• Efetuar conexão com um Board.
                       • Incluir/Alterar/Excluir Cards.`,
      tecnologias: 'Python, Trello.',
      linkGithub: 'https://github.com/EmanoelFrt/PyTrello' 
    },
    {
      imageSrc: 'Projeto-Portfolio.jpg',
      imageGif: 'Portfolio.gif',
      nome: 'Portifólio',
      descricao: 'Projeto base deste portifólio. Desenvolvido totalmente em React.',
      funcionalidades:`• Navegar por seções do site.
                       • Demonstrar projetos pessoais.
                       • Efetuar envio de e-mail.`,
      tecnologias: 'React, CSS, Javascript.',
      linkGithub: 'https://github.com/EmanoelFrt/Portfolio'
    }
  ];
  
  useEffect(function(){
    function posicaoScroll(){
      if(window.scrollY > 40){
        setAtivaCor(true);
      } else {
        setAtivaCor(false);
      }

    }

    window.addEventListener('scroll', posicaoScroll);
  }, []);

  return (
    <div className="App">
      <Header acao={ativaCor} />
      <Banner/>
      <SobreMim/>
      <ListaProjetos projetos={projetos}/>
      <Footer/>
      <ScrollToTopButton />
    </div>
  );
}

export default App;
