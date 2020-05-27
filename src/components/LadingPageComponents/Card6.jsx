import React from 'react'
import rabisco from '../../img/rabisco.png'

function Card6(props) {
  return (
    <div className="container d-flex p-2">
      <div className='row'>
        <h2 className="col-sm-12 col-md-6 text-card6 align-self-center d-flex">
        Nós sabemos que as roupas não vão mudar o mundo. No entanto, as pessoas que as vestem... elas com certeza vão
      </h2>
      <div className=" col-sm-12 col-md-6 d-flex  justify-content-center">
        <img src={rabisco} className="img-fluid" alt="Silhuetas corpos" />
      </div>
      </div>
      
    </div>
  )
}

export default Card6