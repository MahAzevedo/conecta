import './Navegacao.css'

export const Navegacao = () => {
    return (
        <header className="nav-bar">
            <nav className='nav'>
                <div>
                    <img src="/imagem/marca.conecta.03 1.png" alt="Logo Conecta" />
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
                <figure className='nav-lata-banner'>
                    <img src='/imagem/375.header.lata.guaraná 1.png' alt='Lata de refrigerante' />
                </figure>
                <div className='nav-titulo'>
                    <h1>Aqui um título de duas linhas</h1>
                </div>
                <botao className='nav-botao'>
                    <p className='nav-botao-texto'>
                        Aqui um CTA
                    </p>
                </botao>
            </section>
        </header>
    );
}

// *** ATENÇÃO: 
// botao está DESALINHADO