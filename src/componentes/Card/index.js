import './Card.css'
import { Botao } from '../Botao/index';
import { Tipografia } from '../Tipografia/index';

export const Card = () => {
    return (
        <section className='card-container'>
                <ul className='card-ul'>
                    <li className='card-shape-produto'>
                        <div className='card-produto'> 
                            <img src="/imagem/garrafa.guarana1.png" alt="Garrafa de guaraná 350ml" />
                        </div>
                        <div className='card-texto'>
                            <h4 className='card-titulo'>
                                Garrafa 350ml
                            </h4>
                            <Tipografia className='card-paragrafo'>
                                Lorem ipsum dolor sit amet
                            </Tipografia>
                            <Botao className='card-botao botao-verde'>
                                <Tipografia className='card-botao-texto'>
                                    Aqui um CTA
                                </Tipografia>
                            </Botao>
                        </div>
                    </li>
                    <li className='card-shape-produto2'>
                        <div className='card-produto'>
                            <img src="/imagem/375.card.lata.guarana.png" alt="Lata de guaraná 100ml" />
                        </div>
                        <div className='card-texto'>
                            <h4 className='card-titulo'>
                                Garrafa 350ml
                            </h4>

                            <Tipografia className='card-paragrafo'>
                                Lorem ipsum dolor sit amet
                            </Tipografia>
                            <Botao className='card-botao botao-verde'>
                                <Tipografia className='card-botao-texto'>
                                    Aqui um CTA
                                </Tipografia> 
                            </Botao>
                        </div>
                    </li>
                </ul>
            </section>
    );
}


