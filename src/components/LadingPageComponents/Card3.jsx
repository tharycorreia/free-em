import React from 'react'
import Motivo from './Motivo'
import cel1 from '../../img/cel1.png'
import cel2 from '../../img/cel2.png'

function Card3(props) {
  const contexto = 'Com suas medias, elaboramos um relatório como este: '
  return (
    <div className='container card-height'>
      <Motivo numMotivo='1' titulo='Conheça seu corpo' contexto={contexto} />
      <div className='d-flex row p-4 pb-5'>
        <div className="col-sm-12 col-md-6 d-flex justify-content-center pb-3">
          <img src={cel1} className="img-fluid" alt="Silhuetas corpos" />
        </div>
        <div className="col-sm-12 col-md-6 d-flex justify-content-center pb-3">
          <img src={cel2} className="img-fluid" alt="Silhuetas corpos" />
        </div>
      </div>
      <h5 className='d-flex justify-content-center pb-5 text-center font1'>
        CONSCIÊNCIA | EXPERIÊNCIA | DIVERSIDADE
      </h5>
    </div>
  )
}

export default Card3