import React from 'react'
import { connect } from 'react-redux'


function Principal(props) {
    return (
        <div className="footer">
           <h1>Principal</h1>
        </div>
        
    )
}

function mapStateToProps(state) {
    return {
        numeros: state.numeros
    }
}

export default connect(mapStateToProps)(Principal)

 