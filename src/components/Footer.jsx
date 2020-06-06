import React from 'react'
import instagram from '../img/instagram.svg'
import facebook from '../img/facebook.svg'
import linkedin from '../img/linkedin.svg'
import '../styles/LadingPage.css'

function Footer() {
  return (
    <div className='footer'>
     <div className='container p-5 font1'>
        <div className="d-flex justify-content-center p-4">
          <h2 className='title-footer'>Acompanhe a Free'em Lab</h2>
        </div>
        <div className='d-flex row p-3 pt-4'>
          <h5 className="col-sm-12 col-md-4 justify-content-center d-flex">
            <a href="https://www.instagram.com/free.em.lab/">
              <img className='logo' src={instagram} alt='Logo Instagram' />
              Instagram
            </a>
          </h5>
          <h5 id="facebook" className="col-sm-12 col-md-4 justify-content-center d-flex">
            <a href="https://www.facebook.com/Freeem-2241022062603344">
              <img className='logo' src={facebook} alt='Logo Facebook' />
              Facebook
            </a>
          </h5>
          <h5 id="linkedin" className="col-sm-12 col-md-4 justify-content-center d-flex">
            <a href="https://www.linkedin.com/company/free-em/">
              <img className='logo' src={linkedin} alt='Logo Linkedin' />
              Linkedin
            </a>
          </h5>
        </div>
      </div>

      <div className="d-flex justify-content-center footer-bottom">
        <p className='pt-3'>Feito com amor, no Brasil. Free'em Lab 	&reg;</p>
      </div>
    </div>


  )
}

export default Footer

