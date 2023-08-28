import {useParams, useSearchParams} from "react-router-dom";
import {useFetchGenreMovies} from "../hooks/useFetchGenreMovies.ts";
import ListMovies from "../sections/ListMovies.tsx";
import ListPagination from "../components/Pagination/ListPagination.tsx";
import {useEffect, useState} from "react";

const PageGenres = () => {

    const { genres } = useParams()
    const [ getPageParam] = useSearchParams()
    const idParam = getPageParam.get('id')
    const movieByGenreQuery = genres ? useFetchGenreMovies(idParam!.toString()) : null

    const [pageNumber, setPageNumber] = useState(1)
    const [totalPageNumber, setTotalPageNumber] = useState(0)

    console.log("Genre ID: ", genres)
    console.log("Page number: ", pageNumber)

    useEffect(() => {
        if (movieByGenreQuery?.data) {
            const { page, total_pages } = movieByGenreQuery.data;
            setPageNumber(page!);
            setTotalPageNumber(total_pages!);
        }
    }, [movieByGenreQuery]);

    const changePage = () => {
        console.log("Clicking")
    }

    return (
        <div>
            <h2>{genres}</h2>
            <div>
                {movieByGenreQuery?.isSuccess &&
                    <ListMovies data={movieByGenreQuery?.data.results}/>
                }
            </div>
            <div>
                <ListPagination page={pageNumber} total_pages={totalPageNumber} handleClick={changePage}/>
            </div>
        </div>

    )
}

export default PageGenres