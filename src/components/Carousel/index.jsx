import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const VISIBLE_COUNT = 8;

const Carousel = ({ title, movies }) => {
  const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [direction, setDirection] = useState('');

  const maxPage = Math.max(0, Math.ceil(movies.length / VISIBLE_COUNT) - 1);
  const startIdx = page * VISIBLE_COUNT;
  const visibleMovies = movies.slice(startIdx, startIdx + VISIBLE_COUNT);

  const handleCardClick = (id) => {
    navigate(`/movie/${id}`);
  };

    const handlePrev = () => {
      if (page > 0 && !animating) {
        setDirection('left');
        setAnimating(true);
        setTimeout(() => {
          setPage(prev => Math.max(0, prev - 1));
          setAnimating(false);
    }, 300);
      }
    };
    const handleNext = () => {
      if (page < maxPage && !animating) {
        setDirection('right');
        setAnimating(true);
        setTimeout(() => {
          setPage(prev => Math.min(maxPage, prev + 1));
          setAnimating(false);
    }, 300);
      }
    };

  return (
    <div className="carousel-container">
      <h3 className="carousel-title">{title}</h3>
      <div className="carousel-nav">
        <button className="carousel-arrow left" onClick={handlePrev} disabled={page === 0}>&lt;</button>
    <div className={`carousel-list${animating ? ` animating ${direction}` : ''}`}> 
          {visibleMovies.map(movie => (
            <div
              className="carousel-item"
              key={movie.id}
              onClick={() => handleCardClick(movie.id)}
              style={{ cursor: 'pointer' }}
            >
              <img src={import.meta.env.VITE_IMG + movie.poster_path} alt={movie.title} />
              <div className="carousel-movie-title">{movie.title}</div>
            </div>
          ))}
        </div>
        <button className="carousel-arrow right" onClick={handleNext} disabled={page === maxPage}>&gt;</button>
      </div>
    </div>
  );
};

export default Carousel;
