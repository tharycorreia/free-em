import React from 'react'
import { connect } from 'react-redux'
import '../styles/LadingPage.css'
import Card1 from './LadingPageComponents/Card1'
import Card2 from './LadingPageComponents/Card2'
import Card3 from './LadingPageComponents/Card3'
import Card4 from './LadingPageComponents/Card4'
import Card5 from './LadingPageComponents/Card5'
import Card6 from './LadingPageComponents/Card6'
import Footer from './Footer'

function Principal(props) {
  return (
    <div className="container-flex principal">
      <div className='card1'>
      <Card1 />
      </div>
      <div className='card2'>
        <Card2 />
      </div>
      <div className='card3'>
        <Card3 />
      </div>
      <div className='card4'>
        <Card4 />
      </div>
      <div className='card5'>
        <Card5 />
      </div>
      <div className='card6'>
        <Card6 />
      </div>
      <Footer />
    </div>



  )
}

function mapStateToProps(state) {
  return {
    numeros: state.numeros
  }
}

export default connect(mapStateToProps)(Principal)

