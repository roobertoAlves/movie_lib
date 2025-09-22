import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill } from 'react-icons/bs'

import MovieCard from '../../components/MovieCard';
import MovieSkeleton from '../../components/Skeletons/MovieSkeletons';

import './style.css'
import { FaTheaterMasks } from 'react-icons/fa';

const movieURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const cleanMovieURL = movieURL ? movieURL.trim() : ''

const Movie = () => {

  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovie(data);
    } catch (error) {
      setMovie(null);
    }
  }

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  useEffect(() => {
    if (!id) {
      setMovie(null);
      return;
    }
    const movieURLWithId = `${cleanMovieURL}${id}?${apiKey}&language=pt-BR`;
    getMovie(movieURLWithId);
  }, [id])

  return (
    <div className="movie-page">
      {!movie && <MovieSkeleton />}
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} />
          <p className="tagline">{movie.tagline}</p>
          
          <div className="info">
            <h3>  <FaTheaterMasks /> Gênero: 
            </h3>
            <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
          </div>
          <div className="info">
            <h3>
              <BsWallet2 /> Orçamento:
            </h3>
            <p>{formatCurrency(movie.budget)}</p>
          </div>
          <div className="info">
            <h3>
              <BsGraphUp /> Receita:
            </h3>
            <p>{formatCurrency(movie.revenue)}</p>
          </div>
          <div className="info">
            <h3>
              <BsHourglassSplit /> Duração:
            </h3>
            <p>{movie.runtime} minutos</p>
          </div>
          <div className="info description">
            <h3>
              <BsFillFileEarmarkTextFill /> Descrição:
            </h3>
            <p>{movie.overview}</p>
          </div>
        </>
      )}
    </div>
  );
};


export default Movie    