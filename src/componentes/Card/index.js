import './Card.css'

export const Card = () => {
    return (
        <main className='card-container'>
            <section>
                <ul className='card-section'>
                    <li className='card-shape-produto'>
                        <img src="/imagem/garrafa-guaraná 1.png" alt="Garrafa de guaraná 350ml" />
                        <div className='card-texto'>
                            <h4 className='card-titulo'>
                                Garrafa 350ml
                            </h4>
                            <p className='card-paragrafo'>
                                Lorem ipsum dolor sit amet
                            </p>
                            <botao className='card-botao'>Aqui um CTA</botao>
                        </div>
                    </li>
                    <li className='card-shape-produto'>
                        <img src="/imagem/375-lata-guaraná 1.png" alt="Lata de guaraná 100ml" />
                        <div className='card-texto'>
                            <h4 className='card-titulo'>
                                Garrafa 350ml
                            </h4>
                            <p className='card-paragrafo'>
                                Lorem ipsum dolor sit amet
                            </p>
                            <botao className='card-botao'>Aqui um CTA</botao>
                        </div>
                    </li>
                </ul>
            </section>
        </main>
    );
}


