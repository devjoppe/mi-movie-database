export interface genreInt {
    id: number,
    name: string
}

export interface genresInt {
    genres: genreInt[]
    isError: boolean
    isSuccess: boolean
}
