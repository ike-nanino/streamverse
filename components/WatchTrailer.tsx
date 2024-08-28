"use client";

import React, { useState } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import axios from 'axios';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faArrowLeft } from "@fortawesome/free-solid-svg-icons";


interface MovieTrailerProps {
  movieId: string;
}

interface TMDBVideo {
  key: string;
  site: string;
  type: string;
}

interface TMDBResponse {
  results: TMDBVideo[];
}

const WatchTrailer: React.FC<MovieTrailerProps> = ({ movieId }) => {
  const [videoId, setVideoId] = useState<string | null>(null);



  const fetchTrailer = async () => {
    try {
      const apiKey = process.env.NEXT_PUBLIC_API_KEY;

      const response = await axios.get<TMDBResponse>(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`
      );

      console.log(response);

      const trailers = response.data.results.filter(
        (video) => video.site === 'YouTube' && video.type === 'Trailer'
      );

      if (trailers.length > 0) {
        setVideoId(trailers[0].key);
      } else {
        console.log('No trailer found for this movie.');
      }
    } catch (error) {
      console.error('Error fetching trailer:', error);
    }
  };



  const opts: YouTubeProps['opts'] = {
    height: '80%',
    width: '100%',
    playerVars: {
      autoplay: 1,
    
    },
  };

  return (
    <div className='relative'>
        <span onClick={fetchTrailer} className="bg-blue-600 text-white font-bold py-4 px-5 transition duration-500 ease-in-out rounded text-center cursor-pointer hover:bg-blue-500">
                <FontAwesomeIcon icon={faEye} className="mr-2"/>Watch Trailer
        </span>

        
      {videoId && (
        <div
          className='fixed inset-0 w-full h-full max-w-full bg-black overflow-hidden z-50'
        >

            <button
              onClick={() => setVideoId(null)}
              className='absolute top-12 left-12 transition duration-500 ease-in-out text-white font-bold rounded text-center cursor-pointer hover:text-gray-300 z-50'
            >
             <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          <YouTube
            videoId={videoId}
            opts={opts}
            className='absolute top-28 w-full h-full z-50'
          />
        </div>
      )}
    </div>
  );
};

export default WatchTrailer;
