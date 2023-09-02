import Banner from './componentes/Banner';
/*import { Navegacao } from './componentes/Navegacao';*/
import Produto from './componentes/Produto';
import { Card } from './componentes/Card';
import { Divulgacao } from './componentes/Divulgacao';
import { Experimentar } from './componentes/Experimentar';
import Contato from './componentes/Contato';
/*import { Formulario } from './componentes/Formulario';*/
import CampoTexto from './componentes/CampoTexto';


function App() {
  return (
    <div className="App">
      <Banner />
      {/* <Navegacao />*/}
      <Produto />
      <Card />
      <Divulgacao />
      <Experimentar />
      <Contato />
      <CampoTexto label="NOME" />
      <CampoTexto label="TELEFONE" />
      <CampoTexto label="E-MAIL" />
      <CampoTexto label="ASSUNTO" />
      <CampoTexto label="MENSAGEM" />

      {/*<Formulario /> */}

    </div>
  );
}

export default App;


// App JS tá na raíz do projeto.
// App JS é onde está concentrado os componentes.