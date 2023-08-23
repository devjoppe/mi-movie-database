import React from "react";
import {useFetchGenre} from "../../hooks/useFetchGenre.ts";
import FetchError from "../Error/FetchError.tsx";

interface IProp {
    title: string
}

const BrowseGenres:React.FC<IProp> = ({title}) => {

    const genres = useFetchGenre()
    console.log(genres.data)

    return(
        <div>
            { genres.isError ? <FetchError /> : null }
            <h2>{title}</h2>
            <div>

            </div>
        </div>
    )
}

export default BrowseGenres