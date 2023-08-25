import axios from "axios";

import {genresInt} from "../interfaces/genres.interface.ts";
import {browseAllMoviesInt} from "../interfaces/movies.interface.ts";
import {movieInt} from "../interfaces/movie.interface.ts";
import {allRelatedActorsInt} from "../interfaces/actors.interface.ts";

const API_URL = 'https://api.themoviedb.org/3'
const APIKEY = import.meta.env.VITE_API_KEY

const instance = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    params: {
        api_key: APIKEY
    }
})

const fetch = async<T>(endpoint: string) => {
    const response = await instance.get<T>(endpoint)
    return response.data
}

// Fetching all Genres
export const fetchGenre = () => {
    return fetch<genresInt>('/genre/movie/list')
}

// Fetching list of movies based on category (recent, top-rated, popular and all the other movies I specify)
export const fetchBrowseMovies = (page: string, identifier: string | null, option: string | null) => {
    return fetch<browseAllMoviesInt>(`/movie/${identifier}/${option != null ? option : "" }?page=${page}&region=us`)
}

// Fetching all related actors to a movie
export const fetchRelatedActor = (id: string | null) => {
    return fetch<allRelatedActorsInt>(`/movie/${id != null ? id : ""}/credits`)
}

// Fetching DETAIL DATA about movie and actor
export const fetchMovieActor = (id: string, type: string) => {
    return fetch<movieInt>(`/${type}/${id}`)
}