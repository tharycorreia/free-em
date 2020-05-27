import React from 'react'
import corpos1 from '../../img/corpos1.svg'

function Card1(props) {
  return (
    <div className="container d-flex">
      <div className="row">
        <div className='col-sm-12 col-md-6 align-self-center'>
          <h1 className='titulo-principal'>Vamos construir uma moda mais realista e democrática?</h1>
          <h5 className='col-sm-12 col-md-10 pl-0 titulo-secundario'>Queremos uma moda que atenda todos os tipos de corpos.</h5>
        </div>
        <div className="col-sm-12 col-md-6">
          <img src={corpos1} className="img-fluid" alt="Silhuetas corpos" />
        </div>
      </div>

    </div>
  )

}

export default Card1