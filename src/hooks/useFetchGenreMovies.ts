import {useQuery} from "@tanstack/react-query";
import {fetchGenreMovies} from "../services/tmdbAPI.ts";

export const useFetchGenreMovies = (id: string) => {
    return useQuery(['genreMovies', id], () => fetchGenreMovies(id))
}