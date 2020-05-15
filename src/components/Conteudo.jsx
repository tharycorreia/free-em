import React from 'react'
import { connect } from 'react-redux'
import './Conteudo.css'
import Principal from './Principal'
import Sobre from './Sobre'
import Projetos from './Projetos'
import Contato from './Contato'

function Conteudo(props) {
  const menuAtual = props.menu.menu

  return (
    <div className='conteudo'>
      {menuAtual === 'inicio' && <Principal />}
      {menuAtual === 'quemSou' && <Sobre />}
      {menuAtual === 'projetos' && <Projetos />}
      {menuAtual === 'contato' && <Contato />}
    </div>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(Conteudo)