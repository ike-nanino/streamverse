"use client";

import { Movie } from "@/types";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import getImagePath from "@/lib/getImagePath";


type Props = {
  movies: Movie[];
};

function CarouselBanner({ movies }: Props) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 8000 }),
  ]);
  return (
    <div
      className="overflow-hidden h-[720px] relative min-w-0 lg:-mt-20 top-0"
      ref={emblaRef}
    >
      <div className="flex">
        {movies.map((movie) => (
          <div key={movie.id} className="flex-full relative object-cover">
            <Image
              className="w-full h-full overflow-hidden object-cover"
              src={getImagePath(movie.poster_path, true)}
              alt={movie.title}
              width={1080}
              height={720}
            />

            <div className="mt-0 top-0 pt-60 xl:pt-72 left-0 h-full w-full p-10 text-white absolute">
              <div className="flex items-start text-center">
                <span className="bg-yellow-400 text-midnight font-bold py-1 px-2 rounded text-center">
                  TMDb
                </span>
              </div>
              <h1 className="text-4xl font-bold pt-3 text-white ">
                {movie.title}
              </h1>
              <p className="max-w-xl line-clamp-3">{movie.overview}</p>
            </div>

            
          </div>

          
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/50 to-midnight z-10" />
    </div>
  );
}

export default CarouselBanner;
