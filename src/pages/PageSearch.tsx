import {useSearchParams} from "react-router-dom";
import {useFetchSearchMovies} from "../hooks/useFetchSearchMovies.ts";
import {useEffect, useState} from "react";
import {browseAllMoviesInt} from "../interfaces/movies.interface.ts";
import ListMovies from "../sections/ListMovies.tsx";
import ListPagination from "../components/Pagination/ListPagination.tsx";

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

    console.log(movieBySearch)
    console.log("Page: ", setPage)

    return (
        <div>
            <h1>Search</h1>
            <span>You searched "{setQuery}"</span>
            <div>
                {movies &&
                    <ListMovies data={movies!.results} />
                }
            </div>
            <div className="sticky bottom-0 z-10 bg-background w-full p-4 flex justify-center">
                <ListPagination page={Number(setPage)!} total_pages={totalPageNumber} id_param={""} genre_param={setQuery!} type={"search"} />
            </div>
        </div>
    )
}

export default PageSearch