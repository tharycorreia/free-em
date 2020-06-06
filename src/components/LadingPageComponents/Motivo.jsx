import React from 'react'

function Motivo(props) {
  return (
    <div className='font1'>
      <p className='d-flex justify-content-center text-center motivo pt-5'>POR QUÊ PARTICIPAR? Motivo #{props.numMotivo}</p>
      <h3 className='d-flex justify-content-center text-center titulo-motivo pt-2'>{props.titulo}</h3>
      <h5 className='d-flex justify-content-center text-center contexto-motivo p-3'>{props.contexto}</h5>
    </div>      
  )
}

export default Motivo