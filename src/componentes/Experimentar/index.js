import Botao from '../Botao';
import './Experimentar.css'

export const Experimentar = () => {
    return (
        <section className='section-experimentar'>
            <div className='experimentar'>
                <div className='experimentar-verde'>
                    <img src='/imagem/375.verde.Retângulo 9.png' alt='Imagem verde' />
                </div>
                <div className='experimentar-img'>
                    <img src='/imagem/375.lata.guaraná.4.png' alt='Quer experimentar?' />
                </div>
                <p className='experimentar-texto'>
                    Quer experimentar?
                </p>
                <Botao>
                    Aqui um CTA
                </Botao>
            </div>
        </section>
    );
}

// Botao aqui é COMPONENTE, por isso é ***VERDE*** tudo que estiver entre 
// ele aparece na tela, como em um botao html