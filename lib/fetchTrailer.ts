import axios from 'axios';

interface TMDBVideo {
  key: string;
  site: string;
  type: string;
}

interface TMDBResponse {
  results: TMDBVideo[];
}

export const fetchTrailer = async (movieId: string): Promise<string | null> => {
  try {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;

    const response = await axios.get<TMDBResponse>(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`
    );


    const trailers = response.data.results.filter(
      (video) => video.site === 'YouTube' && video.type === 'Trailer'
    );

    if (trailers.length > 0) {
      return trailers[0].key;
    } else {
      console.log('No trailer found for this movie.');
      return null;
    }
  } catch (error) {
    console.error('Error fetching trailer:', error);
    return null;
  }
};
