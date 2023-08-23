import {fetchGenre} from "../services/tmdbAPI.ts";
import {useQuery} from "@tanstack/react-query";

export const useFetchGenre = () => {
    return useQuery(['genres'], fetchGenre)
}