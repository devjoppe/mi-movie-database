import {useParams} from "react-router-dom";
import {useFetchGenreMovies} from "../hooks/useFetchGenreMovies.ts";
import ListMovies from "../sections/ListMovies.tsx";

const PageGenres = () => {

    const { genres } = useParams()
    const movieByGenreQuery = genres ? useFetchGenreMovies(genres.toString()) : null

    console.log("Genre ID: ", genres)
    console.log("Movie by genre: ", movieByGenreQuery)

    return (
        <div>
            Genre page
            <div>
                <ListMovies />
            </div>
        </div>

    )
}

export default PageGenres