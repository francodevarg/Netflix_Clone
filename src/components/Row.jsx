import React, { useState, useEffect } from 'react';
import Categories from './Categories';
import Carousel from './Carousel';
import CarouselItem from './CarouselItem';
import axios from '../axios';

const Row = ({ title, fetchURL, isLargeRow}) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  return (
    <>
      <Categories title={title} />
      <Carousel isLargeRow={isLargeRow}>
        {movies.map((movie) => (
          <CarouselItem
            key={movie.id}
            name={movie.name}
            title={movie.title}
            backdropPath={movie.backdrop_path}
            posterPath={movie.poster_path}
            voteAverage={movie.vote_average}
            isLargeRow={isLargeRow}
          />
        ))}
      </Carousel>
    </>
  );
};

export default Row;
