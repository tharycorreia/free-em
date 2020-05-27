import React from 'react'
import Motivo from './Motivo'

function Card5(props) {
  const title = "Ajude a construir uma moda melhor"
  const contexto = "Nosso objetivo é criar uma nova visão sobre o corpo dos brasileiros e das brasileiras, baseada em dados reais. Ao participar com as suas medidas, você colabora com nossa pesquisa para construir novos moldes de corpos e ajuda a mudar as referências que a indústria da moda usa para construir suas peças."
  return (
    <div className='container'>
      <Motivo numMotivo='3' titulo={title} contexto={contexto} />
      <div className="d-flex justify-content-center pb-5">
        <a href="https://forms.gle/jkEgEuLkDtWdgKk2A">
          <button className='btn'>Faça parte</button>
        </a>
      </div>
    </div>
  )
}

export default Card5