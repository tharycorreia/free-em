import React from 'react'
import Rabisco from '../../img/rabisco.png'

function Card6(props) {
  return (
    <div className="container d-flex p-2 card-height">
      <div className='row'>
        <h2 className="col-sm-12 col-md-6 text-card6 align-self-center d-flex font1">
          Nós sabemos que as roupas não vão mudar o mundo. No entanto, as pessoas que as vestem... elas com certeza vão
      </h2>
        <div className=" col-sm-12 col-md-6 d-flex  justify-content-center">
          <img src={Rabisco} className="img-fluid" alt="Silhuetas corpos" />
        </div>
      </div>

    </div>
  )
}

export default Card6