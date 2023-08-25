
export interface allRelatedActorsInt {
    cast: actorInt[],
    isError: boolean,
    isSuccess: boolean
}

export interface actorInt {
    id: number,
    name: string,
    profile_path: string,
    character: string
}
