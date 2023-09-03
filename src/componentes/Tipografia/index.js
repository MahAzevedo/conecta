// import './Botao.css'

export const Tipografia = ({children, className}) => {
    return(
        <p className={className}>
            {children}
        </p>
    );
}