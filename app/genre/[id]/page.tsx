import MoviesCarousel from "@/components/MoviesCarousel";
import { getDiscoverMovies } from "@/lib/getMovies";

type Props = {
    params: {
        id: string;
    };
    searchParams: {
        genre: string;
    }
}
async function GenrePage({ params: {id}, searchParams: {genre} }: Props) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const movies = await getDiscoverMovies(id);
  return (
    <div>
      <div className="mx-16 max-sm:mx-4 mt-32">
        <MoviesCarousel movies={movies} title={`Results for ${genre}`} />
      </div>
    </div>
  )
}

export default GenrePage
