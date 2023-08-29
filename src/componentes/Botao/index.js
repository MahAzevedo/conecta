import "./Botao.css"

const Botao = (props) => {
    return (
        <section>
            <button className="botao">Aqui um CTA
                {props.children}
            </button>
        


        </section>


    )
}

export default Botao;

// fazer ancora melhor desse botao!!!!! 

//   <button className="botao" variant="contained" href="#contained-buttons">
//      Aqui um CTA 
//   </button>