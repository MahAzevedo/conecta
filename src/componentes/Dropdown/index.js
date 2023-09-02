import './Dropdown.css'

const Dropdown = (props) => {
    console.log(props.itens)

    return (
        <div className='dropdown'>
            <h4 className='dropdown-titulo'>ASSUNTO</h4>
            <label>{props.label}</label>
            <select>
           {/*  {props.itens.map(item => <option key={item}>{item}</option>)}  */}
                {props.itens.map(item => {
                    return<option key={item}>{item}</option>
                })}
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

//  key={item} -> isso aqui é a key/chave para a renderização funcionar bem, adicionei 
//  ao lado do option

// escolhi a mais tradicional, apagar a outra 