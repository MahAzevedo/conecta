import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// esse index.js aqui, seria o "bootstrap" da nossa aplicação,
// é o ponto de entrada, é aqui que a coisa começa, o primeiro
// arquivo que vai ser executado é essa cara aqui, o index.js aqui, 
// que vai renderizar o primeiro componente, e vai fazendo
// isso em cascata

// <React.StrictMode> é esse aqui que ajuda a ver os erros

