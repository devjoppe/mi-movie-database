export interface genreInt {
    id: number,
    name: string
}

export interface genresInt {
    genres: genreInt[]
    isError?: boolean // Todo -> REMOVE
    isSuccess?: boolean // Todo -> REMOVE
}