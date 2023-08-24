import React from "react";
import {useFetchGenre} from "../../hooks/useFetchGenre.ts";
// import {genresInt} from "../../interfaces/genres.interface.ts";
import FetchError from "../Error/FetchError.tsx";

interface IProp {
    title: string
}

const BrowseGenres:React.FC<IProp> = ({title}) => {

    const genres = useFetchGenre()
    console.log(genres)

    return(
        <div>
            { genres.isError ? <FetchError /> : null }
            <h2>{title}</h2>
            { genres.isSuccess && genres.data.genres.map((genre) => (
                <div key={genre.id}>{genre.name}</div>
            ))}
        </div>
    )
}

export default BrowseGenres