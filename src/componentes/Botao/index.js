import './Botao.css'

export const Botao = ({children, className}) => {
    return(
        <button className={'botao ' + className}>
            {children}
        </button>
    );
}