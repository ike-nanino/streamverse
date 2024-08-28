import { Movie } from '@/types';
import React from 'react'
import MovieCard from './MovieCard';

type Props = {
    title?: string;
    movies: Movie[];
}

function MoviesCarousel({ title, movies }: Props) {
  return (

    
    <div >
      <h1 className='text-4xl font-bold pb-6'>{title}</h1>
      
      <div className='grid grid-cols-5 max-sm:grid-cols-2 max-md:grid-cols-4 gap-4 pb-28'>

     
        {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
        ))}
       </div>

    </div>
  )
}

export default MoviesCarousel
