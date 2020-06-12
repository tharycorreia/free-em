import React from 'react'
import Motivo from './Motivo'

function Card5(props) {
  const title = "Ajude a construir uma moda melhor"
  const contexto = `Nosso objetivo é criar uma nova visão sobre o corpo dos brasileiros 
  e das brasileiras, baseada em dados reais. Ao participar com as suas medidas, você 
  colabora com nossa pesquisa para construir novos moldes de corpos e ajuda a mudar as 
  referências que a indústria da moda usa para construir suas peças.`

  return (
    <div className='container card-height d-flex'>
      <div className='align-self-center'>
        <Motivo numMotivo='3' titulo={title} contexto={contexto} />
        <div className="d-flex justify-content-center pt-5">
          <a href="https://forms.gle/jkEgEuLkDtWdgKk2A" target="_blank">
            <button className='btn pt-3 pb-3 pl-5 pr-5 font1'>Faça parte</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card5