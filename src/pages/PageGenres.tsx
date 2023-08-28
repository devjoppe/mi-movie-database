import {useParams, useSearchParams} from "react-router-dom";
import {useFetchGenreMovies} from "../hooks/useFetchGenreMovies.ts";
import ListMovies from "../sections/ListMovies.tsx";

const PageGenres = () => {

    const { genres } = useParams()
    const [ getPageParam] = useSearchParams()
    const idParam = getPageParam.get('id')
    const movieByGenreQuery = genres ? useFetchGenreMovies(idParam!.toString()) : null

    console.log("Genre ID: ", genres)
    console.log("Movie by genre: ",movieByGenreQuery)

    return (
        <div>
            <h2>{genres}</h2>
            <div>
                {movieByGenreQuery?.isSuccess &&
                    <ListMovies data={movieByGenreQuery?.data.results}/>
                }
            </div>
        </div>

    )
}

export default PageGenres