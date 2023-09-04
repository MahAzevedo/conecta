import Banner from './componentes/Banner';
import Produto from './componentes/Produto';
import { Divulgacao } from './componentes/Divulgacao';
import { Experimentar } from './componentes/Experimentar';
import Formulario from './componentes/Formulario';

function App() {
  return (
    <div className="App">
      <Banner />
      <Produto />
      <Divulgacao />
      <Experimentar />
      <Formulario />
    </div>
  );
}

export default App;

