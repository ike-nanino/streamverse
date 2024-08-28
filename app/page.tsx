import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MoviesCarousel from "@/components/MoviesCarousel";
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "@/lib/getMovies";


export default async function Home() {

  
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    
    <main className="text-gravy">
     <CarouselBannerWrapper />

     <div className="mx-16 max-sm:mx-4 mt-10">
      <MoviesCarousel movies={upcomingMovies} title="Coming Soon"/>
      <MoviesCarousel movies={topRatedMovies} title="Top Rated Movies" />
      <MoviesCarousel movies={popularMovies} title="Popular Movies" />
     </div>
    </main>
  );
}
