import './Divulgacao.css'

export const Divulgacao = () => {
    return (
        <section className='section-divulgacao'>
            <ul className='imagens-divulgacao'>
                <li className='imagem'>
                    <div className='imagem-1'>
                        <img src='/imagem/375.festa.png' alt='Festa de divulgacao' />
                    </div>
                </li>
                <li className='imagem-2-carrossel'>
                    <p className='carrossel-comentarios-1'>“Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Etiam
                        commodo hendrerit.”
                    </p>
                    <p className='carrossel-comentarios-2'>
                        @danielmaciel
                    </p>
                    <p className='carrossel-comentarios-3'>
                        paginas do carrossel
                    </p>
                </li>
                <li className='imagem-3'>
                    <img src='/imagem/375.barman.png' alt='Imagem do barman' />
                    <p className='texto-barman'>
                        Peça para seu bar
                    </p>
                </li>
            </ul>
        </section>
    );
}