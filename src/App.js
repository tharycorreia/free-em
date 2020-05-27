import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Conteudo from './components/Conteudo'
import Footer from './components/Footer'

import Menu from './components/Menu'

function App() {

  return (
    <div className="App">
  <Menu /> {/* menu */}
      
       <Conteudo />  {/* conteudo */}
       <div className='footer'>
        <Footer /> {/* rodape */}       

       </div>
      
    </div>
  );
}

export default App;
