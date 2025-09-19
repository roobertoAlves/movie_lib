import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './style.css';

const MovieSkeleton = () => {
  return (
    <div className="movie-skeleton-page">
      <div className="movie-card">
        <Skeleton className="movie-skeleton-img" />
        <Skeleton className="movie-skeleton-title" />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', marginBottom: '1rem' }}>
          <span className="skeleton-icon" />
          <Skeleton width={450} height={24} />
        </div>
      </div>
      <Skeleton className="movie-skeleton-tagline" />
      <div className="info">
        <h3>Gênero:</h3>
        <Skeleton className="movie-skeleton-info" />
      </div>
      <div className="info">
        <h3><span className="skeleton-icon" /> Orçamento:</h3>
        <Skeleton className="movie-skeleton-info" />
      </div>
      <div className="info">
        <h3><span className="skeleton-icon" /> Receita:</h3>
        <Skeleton className="movie-skeleton-info" />
      </div>
      <div className="info">
        <h3><span className="skeleton-icon" /> Duração:</h3>
        <Skeleton className="movie-skeleton-info" />
      </div>
      <div className="info description">
        <h3><span className="skeleton-icon" /> Descrição:</h3>
        <Skeleton className="movie-skeleton-description" />
      </div>
    </div>
  );
};

export default MovieSkeleton;
