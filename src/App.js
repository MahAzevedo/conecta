import Banner from './componentes/Banner';
import { Navegacao } from './componentes/Navegacao';
import Produto from './componentes/Produto';
import { Card } from './componentes/Card';
import { Divulgacao } from './componentes/Divulgacao';
import { Experimentar } from './componentes/Experimentar';
import Contato from './componentes/Contato';


function App() {
  return (
    <div className="App">
      <Banner />
      <Navegacao />
      <Produto />
      <Card />
      <Divulgacao />
      <Experimentar />
      <Contato />
    </div>
  );
}

export default App;
