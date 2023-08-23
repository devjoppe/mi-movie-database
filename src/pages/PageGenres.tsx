import {useFetchGenre} from "../hooks/useFetchGenre.ts";

const PageGenres = () => {

    const genres = useFetchGenre()

    console.log(genres.data)

    return (
        <div>
            Genre page
        </div>
    )
}

export default PageGenres