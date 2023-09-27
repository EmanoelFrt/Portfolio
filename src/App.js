import React, { useEffect, useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Header from './components/Header';
import ListaProjetos from './components/Projeto/ListaProjetos';
import SobreMim from './components/SobreMim/SobreMim';
import './components/ScrollBar.css';

function App() {

  const [ativaCor, setAtivaCor] = useState(false);

  const projetos = [
    {
      imageSrc: 'Projeto-RemoteDesktopManager.jpg',
      imageGif: 'RemoteDesktopManager.gif',
      descricao: 'Aplicativo utilizado para conectar e gerenciar a Conexão de Área de Trabalho Remota do Windows.',
      funcionalidades:`• Inlcluir/Alterar/Excluir clientes e acessos.
                       • Conectar a uma área de trabalho remota via mtsc.exe.
                       • Visualização de acesso de cada usuário.`,
      nome: 'Remote Desktop Manager',
      tecnologias: 'Delphi, SQL e Firebird.',
      linkGithub: 'https://github.com/EmanoelFrt/RemoteDesktopManager' 
    },
    {
      imageSrc: 'Projeto-SyncSistemas.jpg',
      imageGif: 'SyncSistemas.gif',
      funcionalidades:`• Realizar Vendas.
                       • Gestão Financeira.
                       • Controle de Estoque.
                       • Emissão e Envio de NF-e e NFC-e.
                       • Impressão de Relatórios Gerencias.`,
      descricao: 'Sistema ERP/PDV financeiro totalmente desenvolvido em .NET.',
      tecnologias: '.NET, C#, AWS, SQL, PostgreSQL.',
      nome: 'Sync Sistemas'
    },
    {
      imageSrc: 'Projeto-SmartSchool.jpg',
      imageGif: 'SmartSchool.gif',
      funcionalidades:`• Cadastrar Alunos.
                       • Efetuar a Chamada automaticamente utilizando reconhecimento facial.
                       • Impressão de Relatórios Gerencias.`,
      descricao: 'Sistema de presença automatizada por reconhecimento facial em um ambiente escolar. Desenvolvido como projeto de conclusão de curso.',
      tecnologias: '.NET, C#, SQL, PostgreSQL, I.A., Python.',
      nome: 'Smart School'
    },
    {
      imageSrc: 'FotoBanner_old.jpg',
      imageGif: 'animated.gif',
      descricao: 'Teste',
      nome: 'Teste Nome'
    },
    // Adicione mais projetos conforme necessário
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
    </div>
  );
}

export default App;
