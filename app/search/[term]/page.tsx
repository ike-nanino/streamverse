import MoviesCarousel from '@/components/MoviesCarousel';
import { getPopularMovies, getSearchedMovies } from '@/lib/getMovies';
import { notFound } from 'next/navigation';
import React from 'react';

type Props = {
    params: {
        term: string;
    }
}

async function SearchPage({params: {term}}: Props) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  if(!term) notFound();

  const termToUse = decodeURI(term);

  const movies = await getSearchedMovies(termToUse);
  const popularMovies = await getPopularMovies();

  return (
    <div>
      <div className='mx-16 max-sm:mx-4 mt-32'>
        <MoviesCarousel movies={movies} title={`Search: ${termToUse}`} />
        <MoviesCarousel movies={popularMovies} title='You may also like' />
      </div>
    </div>
  )
}

export default SearchPage
