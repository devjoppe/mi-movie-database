import {useQuery} from "@tanstack/react-query";
import {fetchRelatedMovieActor} from "../services/tmdbAPI.ts";

export const useFetchRelatedMovieActors = (url:string, identifier: string | null, option:string[]) => {
    return useQuery([url, identifier, option![0]], () => fetchRelatedMovieActor(url, identifier, option!)
    )
}