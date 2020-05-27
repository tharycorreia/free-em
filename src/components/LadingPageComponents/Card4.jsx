import React from 'react'
import Motivo from './Motivo'

function Card4(props) {
  const title = "Encontre roupas com mais facilidade"
  const contexto = "Com nosso relatório, você poderá encontrar roupas com mais facilidade, ao comparar medidas e caimentos. Você também poderá receber relatórios que te ajudam com isso."
  return (
    <div className='container pb-4'>
      <Motivo numMotivo='2' titulo={title} contexto={contexto} />
    </div>
  )
}

export default Card4