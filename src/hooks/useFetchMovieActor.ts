import { fetchMovieActor } from "../services/tmdbAPI.ts";
import {useQuery} from "@tanstack/react-query";

export const useFetchMovieActor = (id: string, type: string) => {
    return useQuery([type, id], () => fetchMovieActor(id, type)
    )
}