import './Contato.css'
import CampoTexto from '../CampoTexto/index';

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
                    <li>
                        <p className='contato-texto'>
                            |  REDES SOCIAS
                        </p>
                    </li>
                </ul>
            </div>

            <div>  {/* Tá certo colocar isso aqui?? Acho que não!!  Tem que tá no App.js */}
                <CampoTexto label="NOME" placeholder=" Daniel Maciel" /> 
                <CampoTexto label="TELEFONE" placeholder="(21) 00000-0000" />
                <CampoTexto label="E-MAIL" placeholder="email@email.com.br" />
                <CampoTexto label="ASSUNTO" placeholder="Selecione um Assunto" />
                <CampoTexto label="MENSAGEM" placeholder="Escreva aqui sua mensagem" />
            </div>
        </section>
    )
}

export default Contato;

