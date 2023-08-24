export interface browseMovieInt {
    id: number,
    title: string
    vote_average: number,
    release_date: string,
    poster_path: string,
    backdrop_path: string
}

export interface browseAllMoviesInt {
    result: browseMovieInt[],
    isError: boolean,
    isSuccess: boolean
}