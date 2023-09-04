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

// Falta encaixar o COMPONENTE ASSUNTO 


// Tá muito grande esse formulario, a origem desse form está em contato
// que eu incluí aqui pelo corpo do assunto, mas tá grande 


// colocar opacidade e tirar o espaço à esquerda de: telefone até mensagem
// expandir o campo da mensagem
// tirar o verde das outras propriedades, a cor deve ser branca #FFFFFF

// no CAMPO-TEXTO só o PRIMEIRO É CLARO com LETRA BRANCA OPACA, o RESTANTE é escuro 

// no CAMPO 