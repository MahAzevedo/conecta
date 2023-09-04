import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='rodape'>
            <div className='rodape-mensagem'>
                <p className='rodape-texto'>
                    Todos os direitos reservados © 2023 Conecta
                </p>
            </div>
            <div className='rodape-marca'>
                <p className='rodape-texto1'>
                    PROJETADO POR
                </p>
                <div className='rodape-site'>
                    <a href='www.conectaai.com/' target="_blank">
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Rodape;