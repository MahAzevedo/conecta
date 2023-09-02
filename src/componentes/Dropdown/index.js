import './Dropdown.css'

const Dropdown = (props) => {
    console.log(props.itens)

    return (
        <div>
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => <option>{item}</option>)}
                {props.itens.map(item => {return<option>{item}</option>})}
            </select>
        </div>
    );
}

export default Dropdown;

// {props.itens.map(item => <option>{item}</option>)}
// {props.itens.map(item => {return<option>{item}</option>})}
// São a mesma coisa, mas de forma diferente de escrever, no segundo vc consegue ver o 
// returna opção item a ser escolhido de forma mais intuitiva qua no de cima
// mas, depois que vc entende vc passa a ver, opção retorna item  