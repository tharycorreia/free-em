import React from 'react';
import './App.css';
import Conteudo from './components/Conteudo'
import Footer from './components/Footer'

import Menu from './components/Menu'

function App() {

  return (
    <div className="App">
  <Menu /> {/* menu */}
      
       <Conteudo />  {/* conteudo */}
        <Footer /> {/* rodape */}       
      
    </div>
  );
}

export default App;
