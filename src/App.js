import Banner from './componentes/Banner';
import { Navegacao } from './componentes/Navegacao';
import Produto from './componentes/Produto';
import { Card } from './componentes/Card';
import Contato from './componentes/Contato';
import { Divulgacao } from './componentes/Divulgacao';

function App() {
  return (
    <div className="App">
      <Banner />
      <Navegacao />
      <Produto />
      <Card />
      <Divulgacao />
      <Contato />
    </div>
  );
}

export default App;
