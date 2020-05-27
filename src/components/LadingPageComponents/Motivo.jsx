import React from 'react'

function Motivo(props) {
  return (
    <div>
      <p className='d-flex justify-content-center motivo pt-5 '>Motivo #{props.numMotivo}</p>
      <h3 className='d-flex justify-content-center titulo-motivo p-2'>{props.titulo}</h3>
      <h5 className='d-flex justify-content-center contexto-motivo pb-4'>{props.contexto}</h5>
    </div>      
  )
}

export default Motivo