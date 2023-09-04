import './CampoTexto.css'
import { useState } from 'react'

const CampoTexto = ({label, placeHolder, obrigatorio}) => {
    const [extraClass, setExtraClass] = useState("")

    const aoDigitado = (evento) => {
        setExtraClass("")
        const tamanho = evento.target.value.length;
        if (tamanho !== undefined && tamanho > 0) {
            setExtraClass("campo-texto-preenchido")
        }
    }


    return (
        <div className={"campo-texto " + extraClass}>
            <label>{label}</label>
            <input placeholder={placeHolder} onChange={aoDigitado} required={obrigatorio} />
        </div>
    );
}

export default CampoTexto;