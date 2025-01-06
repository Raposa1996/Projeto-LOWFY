import React from 'react';
import ReactDOM from 'react-dom/client'; // Alterado para o novo método de renderização no React 18
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // Importando BrowserRouter

// Criar a raiz para a renderização no React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
