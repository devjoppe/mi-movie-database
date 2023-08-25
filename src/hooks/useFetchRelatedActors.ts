import {useQuery} from "@tanstack/react-query";
import {fetchRelatedActor} from "../services/tmdbAPI.ts";

export const useFetchRelatedActors = (id: string | null) => {
    return useQuery(['actors', id], () => fetchRelatedActor(id)
    )
}