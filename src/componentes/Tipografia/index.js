// import './Botao.css'

export const Tipografia = (props) => {
    return(
        <p className={props.className}>
            {props.children}
        </p>
    );
}