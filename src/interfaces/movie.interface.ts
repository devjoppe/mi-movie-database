import {genreInt} from "./genres.interface.ts";

export interface movieInt {
    id?: number,
    backdrop_path: string,
    budget: number,
    genres: genreInt[]
    homepage: string,
    imdb_id: string,
    title: string,
    vote_average: string,
    poster_path: string,
    overview: string,
    tagline?: string,
    runtime: number,
    release_date: string
}