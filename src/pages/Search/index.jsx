
import React, { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import MovieCard from "../../components/MovieCard";
import './style.css';

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;
const genreURL = 'https://api.themoviedb.org/3/genre/movie/list';

const Search = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const query = searchParams.get("q") || "";

  // Carregar lista de gêneros ao montar
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await fetch(`${genreURL}?${apiKey}&language=pt-BR`);
        const data = await res.json();
        setGenres(data.genres || []);
      } catch (error) {
        setGenres([]);
      }
    };
    fetchGenres();
  }, []);

  useEffect(() => {
    if (!query) {
      setMovies([]);
      return;
    }
    const url = `${searchURL}?${apiKey}&query=${query}&language=pt-BR`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        let results = Array.isArray(data.results) ? data.results : [];
        if (selectedGenre) {
          results = results.filter(movie => Array.isArray(movie.genre_ids) && movie.genre_ids.includes(selectedGenre.id));
        }
        setMovies(results);
      })
      .catch(() => setMovies([]));
  }, [query, selectedGenre]);

  return (
    <div className="container">
      <h2 className="title">
        Resultados de: <span className='query-text'>{query}</span>
        {selectedGenre && (
          <span className='query-text'> | Gênero: {selectedGenre.name}</span>
        )}
        <br />
        {/* Listagem de gêneros para busca */}
        {genres.length > 0 && (
          <div className="genre-list-container">
            <span className="genre-list-title">Filtrar por gênero:</span>
            <ul className="genre-list">
              {genres.map(g => (
                <li
                  className={`genre-list-item${selectedGenre && selectedGenre.id === g.id ? ' selected' : ''}`}
                  key={g.id}
                  onClick={() => setSelectedGenre(g)}
                >
                  {g.name}
                </li>
              ))}
            </ul>
            {selectedGenre && (
              <button className="clear-genre-btn" onClick={() => setSelectedGenre(null)}>
                Remover filtro de gênero
              </button>
            )}
          </div>
        )}
      </h2>
      <div className="movies-container">
        {query && movies.length === 0 && (
          <p>Nenhum filme encontrado.</p>
        )}
        {movies.length > 0 && movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Search;