import React from 'react'
import { connect } from 'react-redux'


function Contato(props) {
    return (
        <div className="footer">
           <h1>Contato</h1>
        </div>
        
    )
}

function mapStateToProps(state) {
    return {
        numeros: state.numeros
    }
}

export default connect(mapStateToProps)(Contato)

    /*<Card title='Soma de números' blue>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{props.numeros.min + props.numeros.max}</strong>
                </span>
            </div>
    </Card>*/