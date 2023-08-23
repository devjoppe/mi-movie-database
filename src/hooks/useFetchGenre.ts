import {fetchGenre} from "../services/tmdbAPI.ts";
import {useQuery} from "@tanstack/react-query";

export const useFetchGenre = () => {
    return useQuery(['genres'], fetchGenre, {
        staleTime: 3600000 // 1 hour
    })
}