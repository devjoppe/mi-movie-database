
export interface allRelatedActorsInt {
    cast: actorInt[],
    isError: boolean,
    isSuccess: boolean
}

export interface actorInt {
    id: number,
    name: string,
    profile_path: string,
    character?: string
    imdb_id?: string,
    biography?: string,
    birthday?: string,
    known_for_department?: string
}
