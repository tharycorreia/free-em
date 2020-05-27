import React from 'react'

function Card2(props) {
  return (
    <div className='container'>
      <div className="d-flex justify-content-center pt-5 pb-3 ">
        <h2 className='titulo-principal'>Tudo o que precisamos é das suas medidas.</h2>
      </div>
      <div className='d-flex row'>
        <div className="col-sm-12 col-md-4">
          <h5>
            | 01 | Cadastre - se
					</h5>
          <hr></hr>
          <p className='pt-1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in augue sit amet erat pellentesque convallis ut sit amet leo.
					</p>
        </div>
        <div className="col-sm-12 col-md-4">
          <h5 >
            | 02 | Insira suas medidas
					</h5>
          <hr></hr>
          <p className='pt-1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in augue sit amet erat pellentesque convallis ut sit amet leo.
					</p>
        </div>
        <div className="col-sm-12 col-md-4">
          <h5>
            | 03 | Acompanhe
					</h5>
          <hr></hr>
          <p className='pt-1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in augue sit amet erat pellentesque convallis ut sit amet leo.
					</p>
        </div>
      </div>
      <div className="d-flex justify-content-center pt-3 pb-5">
        <a href="https://forms.gle/jkEgEuLkDtWdgKk2A">
          <button className='btn'>Participe da Revolução</button>
        </a>

      </div>
    </ div>
  )

}

export default Card2