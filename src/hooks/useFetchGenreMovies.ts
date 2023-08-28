import {useQuery} from "@tanstack/react-query";
import {fetchGenreMovies} from "../services/tmdbAPI.ts";

export const useFetchGenreMovies = (id: string, page: string) => {
    return useQuery(['genreMovies', id, page], () => fetchGenreMovies(id, page))
}