import { Card } from '../Card';
import './Produto.css'

const Produto = () => {
    return (
        <section className="produto-section">
            <div className='produto-texto'>
                <h4 className='produto-titulo'>
                    Produtos
                </h4>
                <p className='produto-paragrafo'>
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Mauris <br/>
                    semper, tortor sed vehicula.
                </p>
            </div>
            <Card />
        </section>
    );
}

export default Produto;
