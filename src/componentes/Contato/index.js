import './Contato.css'

const Contato = () => {
    return (
        <section className='contato-section'>
            <div className='contato-container'>
                <h5 className='contato-titulo'>
                    Fale Conosco.
                </h5>
                <ul className='contato-redes__sociais'>
                    <li className='contato-links'>
                        <a href='facebook.com'>
                            <img src='/imagem/facebook.png' alt='Imagem Facebook' />
                        </a>
                    </li>
                    <li className='contato-links'>
                        <a href='instagram.com'>
                            <img src='/imagem/instagram.png' alt='Imagem Instagram' />
                        </a>
                    </li>
                    <li >
                        <p className='contato-texto'>
                            |  REDES SOCIAS
                            {/* não está alinhado o REDES SOCIAIS com os outros links*/}
                        </p>
                    </li>
                </ul>
            </div>
            <div className='contato-links'>

            </div>
        </section>
    )
}

export default Contato;

