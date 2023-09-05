import { Botao } from '../Botao';
import './Experimentar.css'
import { Tipografia } from '../Tipografia/index';

export const Experimentar = () => {
    return (
        <section className='experimentar'>
            <div className='experimentar-verde'>
            </div>

            <div className='experimentar-img'>
            </div>

            <Tipografia className='experimentar-texto artigo'>
                Quer experimentar?
            </Tipografia>

            <Botao>
                Aqui um CTA
            </Botao>

        </section>
    );
}

