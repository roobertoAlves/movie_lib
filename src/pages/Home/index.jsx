import { useState, useEffect, use } from "react"
import MovieCard from "../../components/MovieCard";
import Carousel from "../../components/Carousel/index.jsx";
import './style.css'
import MovieSkeletons from '../../components/Skeletons/MovieSkeletons/index.jsx';

const movieURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const cleanMovieURL = movieURL ? movieURL.trim() : ''
const apiBaseURL = cleanMovieURL ? cleanMovieURL.replace(/\/movie\/?$/, '/') : 'https://api.themoviedb.org/3/'

console.log('🔍 Debug URLs:', { 
  movieURL: `"${movieURL}"`, 
  cleanMovieURL: `"${cleanMovieURL}"`,
  apiBaseURL: `"${apiBaseURL}"`, 
  apiKey: apiKey ? 'SET' : 'NOT SET' 
})

const genreList = [
  { id: 28, name: 'Ação' },
  { id: 35, name: 'Comédia' },
  { id: 27, name: 'Terror' },
  { id: 12, name: 'Aventura' },
  { id: 18, name: 'Drama' },
  { id: 16, name: 'Animação' },
  { id: 878, name: 'Ficção Científica' }
];

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [genreMovies, setGenreMovies] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopMovies = async () => {
      setLoading(true);
      try {
        const url = `${movieURL}top_rated?${apiKey}&language=pt-BR`;
        const res = await fetch(url);
        const data = await res.json();

       setTopMovies(Array.isArray(data.results) ? data.results : []);

      } catch {
        setTopMovies([]);
      }
      setLoading(false);
    };
    fetchTopMovies();
  }, []);

  // Busca melhores filmes por gênero
  useEffect(() => {
    const fetchGenres = async () => {
      const promises = genreList.map(async (genre) => {
        try {
          const url = `${apiBaseURL}discover/movie?${apiKey}&with_genres=${genre.id}&sort_by=vote_average.desc&vote_count.gte=100&language=pt-BR`;
          const res = await fetch(url);
          const data = await res.json();
          return { id: genre.id, movies: Array.isArray(data.results) ? data.results : [] };
        } catch {
          return { id: genre.id, movies: [] };
        }
      });
      const results = await Promise.all(promises);
      const moviesByGenre = {};
      results.forEach(({ id, movies }) => {
        moviesByGenre[id] = movies;
      });
      setGenreMovies(moviesByGenre);
    };
    fetchGenres();
  }, []);

  return (
    <div className="container">
      <div className="carousel-section">
        <Carousel title="Melhores filmes avaliados" movies={topMovies} />
      </div>
      {genreList.map(genre => (
        <div className="carousel-section" key={genre.id}>
          <Carousel
            title={`Melhores filmes de ${genre.name}`}
            movies={genreMovies[genre.id] || []}
          />
        </div>
      ))}
    </div>
  );
};

export default Home;