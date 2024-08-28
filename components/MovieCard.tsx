import getImagePath from "@/lib/getImagePath";
import { Movie } from "@/types";
import Image from "next/image";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


type Props = {
    movie: Movie;
}

function MovieCard({ movie }: Props) {

  return (

    <Link href={`/movie/${movie.id}`}>
    <div className="cursor-pointer relative overflow-hidden">

    
    
      <Image
        className="w-fit h-fit object-cover cursor-pointer"
        src={getImagePath(movie.poster_path || movie.backdrop_path )}
        alt={movie.title}
        width={1920}
        height={1080}
        key={movie.id}
      />

      <div className="absolute bottom-0 left-0 right-0 top-0 w-full overflow-hidden bg-[#0c0c0cad] bg-fixed opacity-0 transition duration-500 ease-in-out hover:opacity-100 animate-[fade-in]"> <span className="flex items-center justify-center h-full"><FontAwesomeIcon icon={faPlay} className="text-4xl text-end"/></span></div>
      
    </div>

      <div>
      <h1 className="text-base font-bold pt-2">{movie.title}</h1>
      </div>
    </Link>
  );
}

export default MovieCard;
