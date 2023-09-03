import Banner from './componentes/Banner';
/*import { Navegacao } from './componentes/Navegacao';*/
import Produto from './componentes/Produto';
import { Card } from './componentes/Card';
import { Divulgacao } from './componentes/Divulgacao';
import { Experimentar } from './componentes/Experimentar';
import Contato from './componentes/Contato';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Logo from './componentes/Logo';

/*import CampoTexto from './componentes/CampoTexto';*/


function App() {
  return (
    <div className="App">
      <Banner />   {/* <Navegacao />    tá dentro do Banner */}
      <Logo />
      <Produto />
      <Card />
      <Divulgacao />
      <Experimentar />
      {/*    <Contato />              Não preciso mais */} 
      <Formulario />
      {/*<Rodape               Não preciso mais />*/}
    </div>
  );
}

export default App;


// App JS tá na raíz do projeto.
// App JS é onde está concentrado os componentes.