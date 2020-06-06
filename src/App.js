import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Conteudo from './components/Conteudo'

import Menu from './components/Menu'

function App() {

  return (
    <div className="App">
      <Menu /> 
      <Conteudo /> 
    </div>
  );
}

export default App;
