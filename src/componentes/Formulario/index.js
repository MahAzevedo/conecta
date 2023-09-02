import './Formulario.css'

import CampoTexto from '../CampoTexto/index';

const Formulario = () => {
    return (   
        <section className='formulario'>
            <form>
                <div className='formulario-container'>
                    <h5 className='formulario-titulo'> {/*'Não precisaria + desse título*/}
                        Fale Conosco.
                    </h5>
                    <ul className='formulario-redes__sociais'>
                        <li className='formulario-links'>
                            <a href='facebook.com'>
                                <img src='/imagem/facebook.png' alt='Imagem Facebook' />
                            </a>
                        </li>
                        <li className='formulario-links'>
                            <a href='instagram.com'>
                                <img src='/imagem/instagram.png' alt='Imagem Instagram' />
                            </a>
                        </li>
                        <li>
                            <p className='formulario-texto'>
                                |  REDES SOCIAS
                            </p>
                        </li>
                    </ul>
                </div>

                <CampoTexto label="NOME" placeholder=" Daniel Maciel" />
                <CampoTexto label="TELEFONE" placeholder="(21) 00000-0000" />
                <CampoTexto label="E-MAIL" placeholder="email@email.com.br" />
                <CampoTexto label="ASSUNTO" placeholder="Selecione um Assunto" />
                <CampoTexto label="MENSAGEM" placeholder="Escreva aqui sua mensagem" />
            </form>
        </section>
    )
}

export default Formulario;

// Tá muito grande esse formulario, a origem desse form está em contato
// que eu incluí aqui pelo corpo do assunto, mas tá grande 


// colocar opacidade e tirar o espaço à esquerda de: telefone até mensagem
// expandir o campo da mensagem
// tirar o verde das outras propriedades, a cor deve ser branca #FFFFFF