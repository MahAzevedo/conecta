import './Card.css'

export const Card = () => {
    return (
        <main className='card-container'>
            <section className='card-section'>
                <ul className='card-ul'>
                    <li className='card-shape-produto'>
                        <div>
                            <img src="/imagem/garrafa.guaraná 1.png" alt="Garrafa de guaraná 350ml" />
                        </div>
                        <div className='card-texto'>
                            <h4 className='card-titulo'>
                                Garrafa 350ml
                            </h4>
                            <p className='card-paragrafo'>
                                Lorem ipsum dolor sit amet
                            </p>
                            <botao className='card-botao'>
                                <p className='card-botao-texto'>
                                    Aqui um CTA
                                </p>
                            </botao>
                        </div>
                    </li>
                    <li className='card-shape-produto'>
                        <div className='produto'>
                            <img src="/imagem/375.card.lata.guaraná.png" alt="Lata de guaraná 100ml" />
                        </div>
                        <div className='card-texto'>
                            <h4 className='card-titulo'>
                                Garrafa 350ml
                            </h4>
                            <p className='card-paragrafo'>
                                Lorem ipsum dolor sit amet
                            </p>
                            <botao className='card-botao'>
                                <p className='card-botao-texto'>
                                    Aqui um CTA
                                </p>
                            </botao>
                        </div>
                    </li>
                </ul>
            </section>
        </main>
    );
}


