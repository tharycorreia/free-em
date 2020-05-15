import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'

function Sorteio(props) {
  const alteatorio = parseInt(Math.random() * (props.numeros.max - props.numeros.min) + props.numeros.min)
  return (
    <Card title='Sorteio' purple>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{alteatorio}</strong>
        </span>
      </div>
    </Card>
  )
}

function mapStateToProps(state) {
  return {
    numeros: state.numeros
  }
}

export default connect(mapStateToProps)(Sorteio)