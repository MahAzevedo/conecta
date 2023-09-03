import './Navegacao.css'

export const Navegacao = () => {
    return (
        <header className="nav-bar">
            <nav className='nav'>
                    <div className='nav-logo-conecta'>
                        {/*<img src='public/imagem/Grupo38.png' alt='Logo CONECTA.' />*/}
                    </div>
                <ul className='nav-ul'>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <img src="/imagem/facebook.png" alt="Facebook Conecta" />
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com" target="_blank">
                            <img src="/imagem/instagram.png" alt="Instagram Conecta" />
                        </a>
                    </li>
                </ul>
            </nav>

            <section className='nav-produto'>
                <div className='nav-lata-banner-img'>
                    {/* aqui ficava a imagem 375*/}
                </div>
                <div>
                    <h1 className='nav-titulo'>
                        Aqui um título de <br/>
                        duas linhas
                    </h1>
                </div>
                <button className='nav-botao'>
                    <p className='nav-botao-texto'>
                        Aqui um CTA
                    </p>
                </button>
                {/*<Botao >
                    Aqui um CTA
                </Botao>*/}
            </section>
        </header>
    );
}

