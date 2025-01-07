import React from 'react';
import ReactDOM from 'react-dom/client'; // Alterado para o novo método de renderização no React 18
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // Importando BrowserRouter
import AOS from "aos";
import "aos/dist/aos.css"; // Importa o CSS do AOS

AOS.init({
  duration: 1000, // Duração da animação (em milissegundos)
  once: true, // A animação ocorrerá apenas uma vez
});



// Criar a raiz para a renderização no React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
