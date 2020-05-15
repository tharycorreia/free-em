import React from 'react'
import { connect } from 'react-redux'


function Sobre(props) {
    return (
        <div className="footer">
           <h1>Sobre</h1>
        </div>
        
    )
}

function mapStateToProps(state) {
    return {
        numeros: state.numeros
    }
}

export default connect(mapStateToProps)(Sobre)

    /*<Card title='Soma de números' blue>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{props.numeros.min + props.numeros.max}</strong>
                </span>
            </div>
    </Card>*/