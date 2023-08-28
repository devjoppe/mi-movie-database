export interface browseMovieInt {
    id: number,
    title: string
    vote_average: number,
    release_date: string,
    poster_path: string,
    backdrop_path: string
}

export interface browseAllMoviesInt {
    results: browseMovieInt[],
    page?: number
    total_pages?: number,
    isError: boolean,
    isSuccess: boolean
}