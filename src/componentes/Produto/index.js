import './Produto.css'

const Produto = () => {
    return (
        <section className='produto'>
            <div className='card'>
                <h4>Produtos</h4>
                <p>
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Mauris
                    semper, tortor sed vehicula.
                </p>
            </div>
            <div className="garrafa">
                <img src="/imagem/garrafa-guaraná 1.png" alt="Garrafa de guaraná" />
            </div>
        </section>
    );
}

export default Produto;