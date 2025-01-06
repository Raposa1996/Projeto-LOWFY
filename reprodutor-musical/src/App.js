import React from 'react';
import { Route, Routes, Link } from 'react-router-dom'; // Alteração de Switch para Routes
import MusicPlayer from './reprodutor/MusicPlayer'; // Corrigindo caminho de importação
import About from './About'; // Componente de "Sobre"
import '../src/Css/style.css'

function App() {
  return (
    <div className="App">
      <h1>Reprodutor de Música</h1>

      {/* Links para navegação */}
      <nav>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
        </ul>
      </nav>

      {/* Routes para renderizar as rotas */}
      <Routes>
        <Route path="/" element={<MusicPlayer />} /> {/* Alteração do conteúdo da rota */}
        <Route path="/about" element={<About />} /> {/* Alteração do conteúdo da rota */}
      </Routes>
    </div>
  );
}

export default App;
