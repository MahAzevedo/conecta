import './Divulgacao.css'

export const Divulgacao = () => {
    return (
        <section className='section-divulgacao'>
            <div className='section-container'>
                <ul className='imagens-divulgacao'>
                    <li className='imagem'>
                        <div className='imagem-1'>
                        </div>
                    </li>
                    <div className='divulgacao-ld'>
                        <li className='imagem-2-carrossel'>
                            {/* carrossel entra aqui */}
                            <p className='carrossel-comentarios-1'>
                                “Lorem ipsum dolor sit amet,
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
                            <p className='texto-barman'>
                                Peça para seu bar
                            </p>
                        </li>
                    </div>
                </ul>
            </div>
        </section >
    );
}