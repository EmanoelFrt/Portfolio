import React, { useEffect, useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Header from './components/Header';
import ListaProjetos from './components/ListaProjetos';
import SobreMim from './components/SobreMim';

function App() {

  const [ativaCor, setAtivaCor] = useState(false);

  const projetos = [
    {
      imageSrc: 'FotoBanner_old.jpg',
    },
    {
      imageSrc: 'FotoBanner_old.jpg',
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