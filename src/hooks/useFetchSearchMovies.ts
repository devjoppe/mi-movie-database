import {useQuery} from "@tanstack/react-query";
import {fetchSearchMovies} from "../services/tmdbAPI.ts";

export const useFetchSearchMovies = (query: string, page: string) => {
    return useQuery(['search', query, page], () => fetchSearchMovies(query, page))
}