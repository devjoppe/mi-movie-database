import { fetchBrowseMovies } from "../services/tmdbAPI.ts";
import {useQuery} from "@tanstack/react-query";

export const useFetchBrowseMovies = (page: string, category: string) => {
    return useQuery(['playingMovies'], () => fetchBrowseMovies(page, category), {
        staleTime: 3600000 // 1 hour
    })
}