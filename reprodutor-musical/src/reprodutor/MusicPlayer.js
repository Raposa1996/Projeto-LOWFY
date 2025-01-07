import React, { useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import '../Css/style.css';
import AOS from "aos";
import "aos/dist/aos.css"; 

// Inicializa o AOS
AOS.init({
  duration: 1000, // Duração da animação (em milissegundos)
  once: true, // A animação ocorrerá apenas uma vez
});

const YouTubeMusicPlayer = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [query, setQuery] = useState('');
  const [nextPageToken, setNextPageToken] = useState(null); // Armazenar token da próxima página
  const [prevPageToken, setPrevPageToken] = useState(null); // Armazenar token da página anterior

  const apiKey = 'AIzaSyCDd9CoT5BhJwOovgODOrWVQRDGjnQSp7g';

  // Função para buscar vídeos com paginação
  const fetchVideos = async (pageToken = '') => {
    if (!query.trim()) return;

    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${encodeURIComponent(
          query
        )}&type=video&key=${apiKey}&pageToken=${pageToken}`
      );

      // Atualiza os vídeos, o token da próxima página e o token da página anterior
      setVideos(response.data.items);
      setNextPageToken(response.data.nextPageToken); // Atualiza o token para a próxima página
      setPrevPageToken(response.data.prevPageToken); // Atualiza o token para a página anterior
      setSelectedVideo(null);
    } catch (error) {
      console.error('Erro ao buscar vídeos no YouTube:', error.response?.data || error.message);
    }
  };

  // Função para alternar play/pause do vídeo
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Função para ir para a próxima página
  const goToNextPage = () => {
    if (nextPageToken) {
      fetchVideos(nextPageToken); // Passa o token da próxima página
    }
  };

  // Função para ir para a página anterior
  const goToPrevPage = () => {
    if (prevPageToken) {
      fetchVideos(prevPageToken); // Passa o token da página anterior
    }
  };

  return (
    <div className="music-player">
      <h1 className="title">Buscador e Player de Músicas do YouTube</h1>
      <div className="search-container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Digite o nome da música ou artista..."
          className="search-input"
        />
        <button onClick={() => fetchVideos()} className="search-button">
          Buscar
        </button>
      </div>

      {selectedVideo ? (
        <div className="video-container">
          <h2 className="video-title">{selectedVideo.snippet.title}</h2>
          <p className="video-channel">
            <strong>Canal:</strong> {selectedVideo.snippet.channelTitle}
          </p>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${selectedVideo.id.videoId}`}
            playing={isPlaying}
            controls={true}
            className="react-player"
          />
          <button onClick={togglePlayPause} className="play-button">
            {isPlaying ? 'Pausar' : 'Tocar'}
          </button>
          
        </div>
      ) : (
        <ul className="video-list">
          {videos.map((video) => (
            <li
              key={video.id.videoId}
              className="video-item"
              onClick={() => {
                setSelectedVideo(video);
                setIsPlaying(false);
              }}
            >
              <h3 className="video-item-title">{video.snippet.title}</h3>
              <p className="video-item-channel">{video.snippet.channelTitle}</p>
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                className="video-thumbnail"
              />
            </li>
          ))}
        </ul>
      )}

      {/* Botão para próxima página */}
      {nextPageToken && (
        <button onClick={goToNextPage} className="next-page-button">
          Próxima Página
        </button>
      )}

      {/* Botão para página anterior */}
      {prevPageToken && (
        <button onClick={goToPrevPage} className="previous-page-button">
          Página Anterior
        </button>
      )}
    </div>
  );
};

export default YouTubeMusicPlayer;
