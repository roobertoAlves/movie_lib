import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const imageURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };
  return (
    <div className="movie-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <img src={imageURL + movie.poster_path} alt={movie.title} />
      <h3>{movie.title}</h3>
      <span>
        <FaStar /> {movie.vote_average}
      </span>
    </div>
  );
};

export default MovieCard;