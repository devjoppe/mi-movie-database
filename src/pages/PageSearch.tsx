import {useSearchParams} from "react-router-dom";
import {useFetchSearchMovies} from "../hooks/useFetchSearchMovies.ts";
import {useEffect, useState} from "react";
import {browseAllMoviesInt} from "../interfaces/movies.interface.ts";
import ListMovies from "../sections/ListMovies.tsx";
import ListPagination from "../components/Pagination/ListPagination.tsx";
import FetchError from "../components/Error/FetchError.tsx";

const PageSearch = () => {

    const [getPageParams] = useSearchParams()
    const setQuery = getPageParams.get("query")
    const setPage = getPageParams.get("page")

    const movieBySearch = useFetchSearchMovies(setQuery!, setPage!)

    const [movies, setMovies] = useState<browseAllMoviesInt | null>(null)
    const [totalPageNumber, setTotalPageNumber] = useState(0)

    useEffect(() => {
        if(movieBySearch && movieBySearch.data) {
            const { total_pages } = movieBySearch.data
            setTotalPageNumber(total_pages!)
            setMovies(movieBySearch.data)
        }
    }, [movieBySearch]);

    console.log("From search: ", movies)

    return (
        <div className="flex flex-col">
            <h1>Search</h1>
            <span className="mt-4 mb-4">You searched "{setQuery}"</span>
            { movieBySearch.isError ? <FetchError /> : null }
            <div>
                { movies &&
                    <ListMovies data={movies.results} />
                }
                { movies?.results.length === 0 &&
                    <div>There where no results for { setQuery }. Try another keyword!</div>
                }
            </div>
            <div className="sticky bottom-0 z-10 bg-background w-full p-4 flex justify-center">
                { movies?.results.length != 0 && <ListPagination page={Number(setPage)!} total_pages={totalPageNumber} id_param={""} genre_param={setQuery!} type={"search"} />}
            </div>
        </div>
    )
}

export default PageSearch