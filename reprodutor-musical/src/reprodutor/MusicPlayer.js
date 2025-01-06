import React, { useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import '../Css/style.css'

const YouTubeMusicPlayer = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [query, setQuery] = useState('');

  const apiKey = 'AIzaSyCDd9CoT5BhJwOovgODOrWVQRDGjnQSp7g';

  const fetchVideos = async () => {
    if (!query.trim()) return;

    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${encodeURIComponent(
          query
        )}&type=video&key=${apiKey}`
      );
      setVideos(response.data.items);
      setSelectedVideo(null);
    } catch (error) {
      console.error('Erro ao buscar vídeos no YouTube:', error.response?.data || error.message);
    }
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
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
        <button onClick={fetchVideos} className="search-button">
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
    </div>
  );
};

export default YouTubeMusicPlayer;
