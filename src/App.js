import Banner from './componentes/Banner';
import { Navegacao } from './componentes/Navegacao';
import Produto from './componentes/Produto';
import { Card } from './componentes/Card';
import Contato from './componentes/Contato';
import Botao from './componentes/Botao';

function App() {
  return (
    <div className="App">
      <Banner />
      <Navegacao />
      <Produto />
      <Card />
      <Contato />
      <Botao />
    </div>
  );
}

export default App;
