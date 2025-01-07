import React, { useEffect } from 'react';
import { Route, Routes, Link, NavLink } from 'react-router-dom'; // Adicionando NavLink
import MusicPlayer from './reprodutor/MusicPlayer';
import About from './About';
import '../src/Css/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importando o CSS do AOS

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Definindo a duração da animação
      once: true, // A animação ocorre apenas uma vez
    });
  }, []);

  return (
    <div className="App">
      {/* Título da aplicação com animação */}
      <header data-aos="fade-down" className="title-container">
        <h1>Reprodutor de Música</h1>
      </header>

      {/* Barra de navegação */}
      <nav data-aos="fade-up">
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active-link">Início</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active-link">Sobre</NavLink>
          </li>
        </ul>
      </nav>

      {/* Rotas para renderizar as páginas */}
      <Routes>
        <Route path="/" element={<MusicPlayer />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
