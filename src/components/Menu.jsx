import './Menu.css'
import React from 'react'
import { connect } from 'react-redux'

import { alteraItemMenu } from '../store/actions/menuActions'

function Menu(props) {

  return (
    <div className='header'>
      <button className='menu-item' onClick={() => props.alteraMenu('inicio')}>Início</button>
      <button className='menu-item' onClick={() => props.alteraMenu('quemSou')}>Quem sou</button>
      <button className='menu-item' onClick={() => props.alteraMenu('projetos')}>Projetos</button>
      <button className='menu-item' onClick={() => props.alteraMenu('contato')}>Contato</button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    menu: state.menu
  }
}

function mapDispatchToProps(dispatch) {
  return {
    alteraMenu(novo) {
      const action = alteraItemMenu(novo)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)