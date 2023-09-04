import './Dropdown.css'

const Dropdown = (props) => {

    return (
        <div className='dropdown'>
            <h4 className='dropdown-titulo'>ASSUNTO</h4>
            <label>{props.label}</label>
            <select>
                <option> Selecione um assunto </option>
                {props.itens.map(item => {
                    return<option key={item}>{item}</option>
                })}
            </select>
        </div>
    );
}

export default Dropdown;

