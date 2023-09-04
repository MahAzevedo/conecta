import './Formulario.css'

import CampoTexto from '../CampoTexto/index';
import Dropdown from '../Dropdown';
import Rodape from '../Rodape';

const Formulario = () => {

    const dropdown = [
        'Aplicativo',
        'Sistema'
    ]

    return (   
        <section className='formulario'>
            <form>
                <div className='formulario-container'>
                    <h5 className='formulario-titulo'> 
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

                <CampoTexto label="NOME" placeHolder=" Daniel Maciel" obrigatorio={true} />
                <CampoTexto label="TELEFONE" placeHolder="(21) 00000-0000" obrigatorio={true} />
                <CampoTexto label="E-MAIL" placeHolder="email@email.com.br" obrigatorio={true} />
                <Dropdown label={Dropdown} itens={dropdown} />
                <CampoTexto label="MENSAGEM" placeHolder="Escreva aqui sua mensagem" />
                <Rodape />
            </form>
        </section>
    )
}

export default Formulario;

