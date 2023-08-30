import Banner from './componentes/Banner';
import Botao from './componentes/Botao';
import { Card } from './componentes/Card';
import Links from './componentes/Links/';
import { Navegacao } from './componentes/Navegacao';
import Produto from './componentes/Produto';

function App() {
  return (
    <div className="App">
      <Banner />
      <Botao />
      <Produto />
      <Navegacao />
      <Card />
      <Links />
    </div>
  );
}

export default App;
