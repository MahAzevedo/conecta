import './Carousel.css'

const Carousel = () => {
    return (
        <div className='row'>
            <div className='column'>
                <img src='/public/imagem/768.festa.divulgacao.png' alt='Festa divulgação do produto' style={{size: "width:100%"}} />
                <div className='carousel-container column'>
                    {/* aqui entra o carrossel */}
                </div>
                <img src='/public/imagem/768.barman.png' alt='Imagem barman' style={{size: "width:100%"}} />
            </div>
        </div>
    );
}

export default Carousel;

/*
<div className='carousel'>
        <section className='section-carousel'>
            <div className='carousel-container'>
                <p className='container-texto1'>
                    “Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Etiam
                    commodo hendrerit.”
                </p>
                <p className='container-texto2'>
                    @danielmaciel
                </p>
                <p>
                    paginas do carrossel
                </p>
            </div>
        </section>
    </div>
*/