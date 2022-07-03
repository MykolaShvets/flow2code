export interface IMovieList {
    page: number;
    results: IMovie[];
    total_results: number;
    total_pages: number;
}

export interface IMovie {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection?: null | object;
    budget?: number;
    genre_ids?: number[];
    genres?: IGenre[];
    homepage?: string | null;
    id: number;
    imdb_id: string | null;
    original_language: string;
    original_title: string;
    overview: string | null;
    popularity: number;
    poster_path: string | null;
    production_companies?: IProdComp[];
    production_countries?: IProdCont[];
    release_date: string;
    revenue?: number;
    runtime?: number;
    spoken_languages?: ILang[];
    status?: string;
    tagline?: string | null;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface ILang {
    iso_639_1: string;
    name: string;
}

export interface IGenre {
    id: number;
    name: string;
}

export interface IProdComp {
    name: string;
    id: number;
    logo_path: string | null;
    origin_country: string;
}

export interface IProdCont {
    iso_3166_1: string;
    name: string;
}
