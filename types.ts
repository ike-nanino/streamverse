export type Movie = {
    id: number;
    title: string;
    adult: boolean;
    release_date: string;
    overview: string;
    popularity: number;
    poster_path?: string;
    backdrop_path: string;
    vote_average: number;
    genre_ids: number[];
    original_language: string;
    original_title: string;
    video: boolean;
    vote_count: number;
    with_cast: string;
}

export type SearchResults = {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}


export type Genre = {
    id: number;
    name: string;
}

export type Genres = {
    genres: Genre[];
}

