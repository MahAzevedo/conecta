import './Banner.css'

export const Banner = () => {
    return (
        <header className="banner">
            <div className="banner-conecta">
                <img src="/imagem/fundo-1440.png" alt="Banner Conecta" />
            </div>

            <div className="banner-logo">
                <img src="/imagem/marca-conecta-03 1.png" alt="Logo Conecta" />
            </div>

            <section className="banner-links">
                <ul>
                    <li className="banner-li">
                        <a href="facebook.com" target="_blank">
                            <img src="/imagem/facebook.png" alt="Facebook Conecta" />
                        </a>
                    </li>
                    <li className="banner-li">
                        <a href="instagram.com" target="_blank">
                            <img src="/imagem/instagram.png" alt="Instagram Conecta" />
                        </a>
                    </li>
                </ul>
            </section>

            <section>
                <h5>Aqui um título de duas linhas</h5>
                <p>
                    de duas linhas
                </p>
            </section>

            <section>
                <botao>
                    Aqui um CTA
                </botao>
            </section>

        </header>
    );
}

export default Banner;