import Banner from './componentes/Banner';
import Produto from './componentes/Produto';
import { Divulgacao } from './componentes/Divulgacao';
import { Experimentar } from './componentes/Experimentar';
import Formulario from './componentes/Formulario';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


function App() {
  return (
    <div className="App">
      <Banner />
      <Produto />
      <Divulgacao />
      <Swiper />
      <Experimentar />
      <Formulario />
    </div>
  );
}

export default App;

