import React from 'react'
import { connect } from 'react-redux'
import github from '../img/github.svg'
import linkedin from '../img/linkedin.svg'


function Soma(props) {
    return (
        <div className="footer">
            <a href="https://www.linkedin.com/in/tharycorreia/" target='_blank'>
                <img src={linkedin} alt="linkedin" height='35px' width='35px' />
            </a>
            <a href="https://github.com/tharycorreia" className='github' target='_blank'>
                <img src={github} alt="github" height='35px' width='35px' />
            </a>
        </div>
        
    )
}

function mapStateToProps(state) {
    return {
        numeros: state.numeros
    }
}

export default connect(mapStateToProps)(Soma)

    /*<Card title='Soma de números' blue>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{props.numeros.min + props.numeros.max}</strong>
                </span>
            </div>
    </Card>*/