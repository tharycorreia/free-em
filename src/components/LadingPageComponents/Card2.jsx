import React from 'react'

function Card2(props) {
  return (
    <div className='container card-height d-flex'>
      <div className='align-self-center '>
        <div className="d-flex justify-content-center pb-5">
          <h2 className='titulo-principal text-center'>Tudo o que precisamos é das suas medidas.</h2>
        </div>
        <div className='d-flex row font1'>
          <div className="col-sm-12 col-md-4">
            <h5>| 01 | Cadastre - se</h5>
            <hr></hr>
            <p className='pt-1'>
              Precisaremos do seu e-mail e algumas informações básicas.
					  </p>
          </div>
          <div className="col-sm-12 col-md-4">
            <h5>| 02 | Insira suas medidas</h5>
            <hr></hr>
            <p className='pt-1'>
              Com uma fita métrica, vamos te guiar num processo para realizar 11 medidas diferentes do seu corpo.
					  </p>
          </div>
          <div className="col-sm-12 col-md-4">
            <h5>| 03 | Acompanhe</h5>
            <hr></hr>
            <p className='pt-1'>
              É isso! Com essas informações você recebe seu perfil e nos ajuda a mudar a moda no Brasil.
					  </p>
          </div>
        </div>
        <div className="d-flex justify-content-center pt-5 ">
          <a href="https://forms.gle/jkEgEuLkDtWdgKk2A">
            <button className='btn pt-3 pb-3 pl-5 pr-5 font1'>Participe da Revolução</button>
          </a>
        </div>
      </div>
    </div>
  )

}

export default Card2