import { fetchBrowseMovies } from "../services/tmdbAPI.ts";
import {useQuery} from "@tanstack/react-query";

export const useFetchBrowseMovies = (page: string, identifier: string | null, option: string | null) => {
        return useQuery(['playingMovies', identifier], () => fetchBrowseMovies(page, identifier, option)
    )
}