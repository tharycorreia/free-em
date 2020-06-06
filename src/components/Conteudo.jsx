import React from 'react'
import { connect } from 'react-redux'
import Principal from './Principal'
import Contato from './Contato'
import '../styles/LadingPage.css'

function Conteudo(props) {
  const menuAtual = props.menu.menu

  return (
    <div className='conteudo'>
      {menuAtual === 'inicio' && <Principal />}
      {menuAtual === 'contato' && <Contato />}
    </div>

  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(Conteudo)