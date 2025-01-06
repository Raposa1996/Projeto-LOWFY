import React from 'react';
import './About.css'; // Se você quiser adicionar um estilo específico para a página "Sobre"

const About = () => {
  return (
    <div className="about-page">
      <h2>Sobre o Reprodutor de Música</h2>
      <p>
        Este é um simples reprodutor de música construído com React. Ele permite que você ouça músicas diretamente em seu navegador, com integração a APIs de música como o Spotify.
      </p>
      <p>
        A ideia por trás deste projeto é oferecer uma interface minimalista e fácil de usar, onde você pode controlar a reprodução de músicas de forma simples e eficaz.
      </p>
      <h3>Funcionalidades:</h3>
      <ul>
        <li>Reprodução de músicas em tempo real</li>
        <li>Controle básico de play/pause e volume</li>
        <li>Integração com APIs de música como o Spotify (em uma versão futura)</li>
      </ul>
      <p>
        O projeto foi desenvolvido com o objetivo de aprender mais sobre React e APIs, criando uma aplicação funcional e interativa. Em breve, esperamos adicionar novas funcionalidades, como listas de reprodução e a capacidade de buscar músicas diretamente de sua conta Spotify.
      </p>
    </div>
  );
};

export default About;
