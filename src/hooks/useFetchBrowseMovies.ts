import { fetchBrowseMovies } from "../services/tmdbAPI.ts";
import {useQuery} from "@tanstack/react-query";

export const useFetchBrowseMovies = (page: string, category: string) => {
        return useQuery(['playingMovies', category], () => fetchBrowseMovies(page, category)
    )
}