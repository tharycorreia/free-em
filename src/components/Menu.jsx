
import React from 'react'
import { connect } from 'react-redux'

import { alteraItemMenu } from '../store/actions/menuActions'
import logo from '../img/logo.png'

function Menu(props) {

  return (
    <div className='container d-inline-flex pt-3 pb-4'>
      <div className='col-sm-12 col-md-4 pt-2'>
      <img src={logo} className="img-fluid" alt="Free'em Lab" />
      </div>
      <ul className=" col-sm-12 col-md-8 nav justify-content-end">
        <li className="nav-item pt-2">
          <a className="btn pt-2 pb-2 pl-4 pr-4  btn-sm btn-menu" href="https://forms.gle/jkEgEuLkDtWdgKk2A" role="button">Participe</a>
        </li>
      </ul>
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