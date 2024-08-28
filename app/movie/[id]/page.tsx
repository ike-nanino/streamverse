import getImagePath from "@/lib/getImagePath";
import Image from "next/image";
import { getPopularMovies } from '@/lib/getMovies';
import MoviesCarousel from '@/components/MoviesCarousel';
import WatchTrailer from "@/components/WatchTrailer";



type Props = {
    params: {
        id: string;
    };

}

async function SelectedMovie({ params: {id}}: Props) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`)
    const movie = await res.json();

    const popularMovies = await getPopularMovies();


  return (
    <div>
        

        <div className="overflow-hidden h-full relative min-w-0">
            <div className="relative object-cover">
                <Image
                className="w-full h-full overflow-hidden object-cover"
                src={getImagePath(movie.backdrop_path, true)}
                alt={movie.title}
                width={1080}
                height={720}
                />

                <div className="absolute bottom-0 left-0 right-0 top-0 w-full overflow-hidden bg-[#0c0c0cad] bg-gradient-to-b from-gray-200/0 via-gray-900/50 to-midnight opacity-1"></div>
            </div>

        </div>

        
        <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:px-0 max-sm:top-12 gap-4 mx-7 max-sm:mx-2 overflow-hidden md:top-20 lg:px-28 absolute max-sm:h-full lg:top-1/3">
               <Image 
                className="object-cover cursor-pointer w-fit h-fit max-sm:hidden px-8 z-[8]"
                src={getImagePath(movie.poster_path, true)}
                alt={movie.title}
                width={280}
                height={360}
                />

                <div className="pr-16 max-sm:pr-0">
                    <div className="flex items-start text-center py-7 max-sm:text-sm z-[8]">
                        <span className="bg-yellow-400 text-midnight font-bold py-1 px-2 rounded text-center">
                        TMDb
                        </span>
                    </div>
                    <div className="flex pt-3 pb-6 text-center items-center max-sm:pb3 z-[8]">
                        <span className="bg-transparent border border-1 rounded py-2 px-2 mr-2">PG</span>
                        <p className="mr-1">&#x2022;</p>
                        <p className="mr-2">{movie.release_date}</p>
                        <p className="mr-1">&#x2022;</p>
                       <p>{`${Math.floor(movie.runtime / 60)}hr ${String(movie.runtime % 60).padStart(2, '0')}mins`}</p>
                    </div>
                    <h1 className="text-4xl font-bold pb-2 z-[8]">{movie.title}</h1>
                    <p className="z-[8]">{movie.overview}</p>
                    
                    <div className="flex items-start text-center pt-9">
                
                         <WatchTrailer movieId={movie.id} />

                    </div>
                </div>
                
            
        </div>

        <div className="mx-16 max-sm:mx-4 mt-96">
        <MoviesCarousel movies={popularMovies} title='You may also like' />
        </div>
    </div>

  )
}

export default SelectedMovie
