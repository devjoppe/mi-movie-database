import {useParams, useSearchParams} from "react-router-dom";
import {useFetchGenreMovies} from "../hooks/useFetchGenreMovies.ts";
import ListMovies from "../sections/ListMovies.tsx";
import ListPagination from "../components/Pagination/ListPagination.tsx";
import {useState, useEffect} from "react";
import {browseAllMoviesInt} from "../interfaces/movies.interface.ts";
import FetchError from "../components/Error/FetchError.tsx";

const PageGenres = () => {

    // Params
    const { genres } = useParams()
    const [ getPageParam] = useSearchParams()
    const setIdParam = getPageParam.get('id')
    const setPageParam = getPageParam.get('page')

    const movieByGenreQuery = useFetchGenreMovies(setIdParam!, setPageParam!)

    const [movieByGenre, setMovieByGenre] = useState<browseAllMoviesInt | null>(null)
    const [totalPageNumber, setTotalPageNumber] = useState(0)

    useEffect(() => {
        if (movieByGenreQuery != null && movieByGenreQuery?.data) {
            const { total_pages } = movieByGenreQuery?.data;
            setTotalPageNumber(total_pages!);
            setMovieByGenre(movieByGenreQuery.data)
        }
    }, [movieByGenreQuery])

    return (
        <div className="relative">
            <h2>{genres}</h2>
            <div>
                { movieByGenre?.isError ? <FetchError /> : null }
                { movieByGenre &&
                    <ListMovies data={movieByGenre!.results}/>
                }
            </div>
            <div className="sticky bottom-0 z-10 bg-background w-full p-4 flex justify-center">
                <ListPagination page={Number(setPageParam)!} total_pages={totalPageNumber} id_param={setIdParam!} genre_param={genres!} type={"genre"} />
            </div>
        </div>

    )
}

export default PageGenres