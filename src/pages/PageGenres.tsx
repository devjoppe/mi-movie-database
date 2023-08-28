import {useParams, useSearchParams} from "react-router-dom";
import {useFetchGenreMovies} from "../hooks/useFetchGenreMovies.ts";
import ListMovies from "../sections/ListMovies.tsx";
import ListPagination from "../components/Pagination/ListPagination.tsx";
import {useState, useEffect} from "react";

const PageGenres = () => {

    // Params
    const { genres } = useParams()
    const [ getPageParam] = useSearchParams()
    const setIdParam = getPageParam.get('id')
    const setPageParam = getPageParam.get('page')

    const movieByGenreQuery = useFetchGenreMovies(setIdParam!, setPageParam!)

    const [totalPageNumber, setTotalPageNumber] = useState(0)

    /* console.log("Genre ID: ", setIdParam)
    console.log("Page param: ", setPageParam)
    console.log("Total of pages: ", totalPageNumber)
    console.log("Listed movies: ", movieByGenreQuery) */

    useEffect(() => {
        if (movieByGenreQuery?.data) {
            const { total_pages } = movieByGenreQuery?.data;
            setTotalPageNumber(total_pages!);
        }
    }, [movieByGenreQuery])

    return (
        <div>
            <h2>{genres}</h2>
            <div>
                {movieByGenreQuery?.isSuccess &&
                    <ListMovies data={movieByGenreQuery?.data.results}/>
                }
            </div>
            <div>
                <ListPagination page={Number(setPageParam)!} total_pages={totalPageNumber} id_param={setIdParam!} genre_param={genres!} />
            </div>
        </div>

    )
}

export default PageGenres