import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='rodape'>
            <div className='rodape-mensagem'> 
                <p className='rodape-texto'>Todos os direitos reservados © 2023 Conecta</p>
            </div>

            <div className='rodape-marca'>
                <p className='rodape-texto1'>PROJETADO POR</p>
                <a className='rodape-site' href='https://www.conectaai.com/'>
                    <img src='public/imagem/rodape.marca.png' alt='Logo da CONECTA.'/>
                </a>
            </div>
        </footer>
    );
}

export default Rodape;